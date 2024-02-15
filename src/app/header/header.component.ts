import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BiodataComponent } from '../biodata/biodata.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProfileComponent } from '../profile/profile.component';
import { SkillsInterestComponent } from '../skills-interest/skills-interest.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  isFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect scroll event and toggle 'isFixed' based on the scroll position
    if (window.scrollY > 50) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  
  @ViewChild(HeaderComponent) homeComponent!: HeaderComponent;
  @ViewChild(ProfileComponent) profileComponent!: ProfileComponent;
  @ViewChild(ExperienceComponent) experienceComponent!: ExperienceComponent;
  @ViewChild(SkillsInterestComponent) skillsInterestComponent!: SkillsInterestComponent;
  @ViewChild(BiodataComponent) biodataComponent!: BiodataComponent;

  constructor() {}

  ngAfterViewInit() {
    // Accessing elements within child components
  }

  scrollTo(section: string) {
    let targetComponent: any;
    switch (section) {
      case 'home':
        targetComponent = this.homeComponent;
        break;
      case 'about':
        targetComponent = this.profileComponent;
        break;
      case 'work':
        targetComponent = this.experienceComponent;
        break;
      case 'skills-interest':
        targetComponent = this.skillsInterestComponent;
        break;
      case 'biodata':
        targetComponent = this.biodataComponent;
        break;
    }
    if (targetComponent) {
      targetComponent.scrollIntoView();
    }
  }

}