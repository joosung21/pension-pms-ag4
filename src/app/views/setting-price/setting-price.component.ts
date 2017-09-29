import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

// Classes
class Season {
  id: number;
  title: string;
  periods ?: {
    id: number;
    startDate: {
      year: number;
      month: number;
      day: number;
    };
    endDate: {
      year: number;
      month: number;
      day: number;
    };
  }[];
  prices ?: any[][];
}

// Bootstrap Datepicker Language Change
const I18N_VALUES = {
  'fr': {
    weekdays: ['월', '화', '수', '목', '금', '토', '일'],
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  }
};
@Injectable()
export class I18n {
  language = 'fr';
}
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}

@Component({
  selector: 'app-setting-price',
  templateUrl: './setting-price.component.html',
  styles: [],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})

export class SettingPriceComponent implements OnInit {

  CreateSeason = false;

  // Bootstrap Modal close result
  closeResult: string;

  // Temorary season data
  SEASONS: Season[] = [
    {
      id: 1,
      title: '비수기',
      prices: [
        ['맨하탄', 100000, 120000, 120000],
        ['아스토리아', 100000, 120000, 120000],
        ['부르클린', 120000, 140000, 140000],
        ['브롱스', 120000, 140000, 140000],
        ['스테이튼 아일랜드', 200000, 140000, 140000]
      ]
    },
    {
      id: 2,
      title: '성수기',
      periods: [
        {
          id: 1,
          startDate: {year: 2017, month: 7, day: 20},
          endDate: {year: 2017, month: 8, day: 15}
        }
      ],
      prices: [
        ['맨하탄', 100000, 120000, 120000],
        ['아스토리아', 100000, 120000, 120000],
        ['부르클린', 120000, 140000, 140000],
        ['브롱스', 120000, 140000, 140000],
        ['스테이튼 아일랜드', 200000, 140000, 140000]
      ]
    },
    {
      id: 3,
      title: '준성수기',
      periods: [
        {
          id: 1,
          startDate: {year: 0, month: 0, day: 0},
          endDate: {year: 0, month: 0, day: 0}
        }
      ],
      prices: [
        ['맨하탄', 100000, 120000, 120000],
        ['아스토리아', 100000, 120000, 120000],
        ['부르클린', 120000, 140000, 140000],
        ['브롱스', 120000, 140000, 140000],
        ['스테이튼 아일랜드', 200000, 140000, 140000]
      ]
    },
  ];

  // Open Bootstrap Modal
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  // Add a season period
  addPeriod(season) {
    const last_item = season.periods[season.periods.length - 1];
    season.periods.push(
      {
        id: last_item.id + 1,
        startDate: {year: 0, month: 0, day: 0},
        endDate: {year: 0, month: 0, day: 0}
      }
    );
  }

  // Delete a season period
  deletePeriod(season, index) {
    season.periods.splice(index, 1);
  }

  // Change price table
  changePrice(price, room, index) {
    room[index] = parseFloat(price.replace(/,/g, ''));
  }

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {

  }

}


