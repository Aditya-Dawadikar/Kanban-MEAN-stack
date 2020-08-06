import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardFloatComponent } from './add-card-float.component';

describe('AddCardFloatComponent', () => {
  let component: AddCardFloatComponent;
  let fixture: ComponentFixture<AddCardFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
