import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPageComponent } from './pipes-page.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

describe('PipesPageComponent', () => {
  let component: PipesPageComponent;
  let fixture: ComponentFixture<PipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesPageComponent],
      imports:[
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial name as gAriKoitZ HerRero', () => {
    expect(component.name).toBe('gAriKoitZ HerRero')
  })

  it('should change client', () => {
    component.changeClient();
    expect(component.name).toBe('anna herrEro')
    expect(component.gender).toBe('female')
  })

  it('should render name in titlecase', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    const titleCaseText = compiled.querySelector('ul li:nth-child(3)').textContent;

    expect(titleCaseText).toContain('Garikoitz Herrero')
  })
});
