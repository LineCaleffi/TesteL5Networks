import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PersonagensFormComponent } from './personagens-form.component';

describe('PersonagensFormComponent', () => {
  let component: PersonagensFormComponent;
  let fixture: ComponentFixture<PersonagensFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
