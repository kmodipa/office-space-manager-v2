import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalController;
  @ViewChild('AddEditUser') addEditUserSlides: SwiperComponent;

  @Input() isOpen: boolean;
  @Output() isClosed = new EventEmitter<boolean>();
  canDismiss = false;
  buttonText = 'Next';
  slideIndex = 0;

  avatarGroup1 = [
    'assets/image/Astronout-Ballons.svg',
    'assets/image/Astronout-Moon.svg',
    'assets/image/Astronout-Planet.svg',
    'assets/image/Astronout-BaseBall.svg',
  ];

  avatarGroup2 = [
    'assets/image/Astronout-Rocket.svg',
    'assets/image/Astronout-SuperHero.svg',
    'assets/image/Astronout-Peace.svg',
  ];

  constructor() {}

  ngOnInit() {}

  onSlideChange() {
    console.log('slide change');
  }

  closeModal(): void {
    this.handleBackButton();
    this.canDismiss = !this.canDismiss;
    this.modal.dismiss().then((r) => {
      this.canDismiss = !this.canDismiss;
      this.isClosed.emit(false);
    });
  }

  handleNextButton(): void {
    if (!this.addEditUserSlides.swiperRef.isEnd) {
      this.addEditUserSlides.swiperRef.slideNext(400);
      this.buttonText = 'Add Staff Member';
      this.slideIndex++;
    }
  }

  handleBackButton(): void {
    if (!this.addEditUserSlides.swiperRef.isBeginning) {
      this.addEditUserSlides.swiperRef.slidePrev(400);
      this.buttonText = 'Next';
      this.slideIndex--;
    }
  }
}
