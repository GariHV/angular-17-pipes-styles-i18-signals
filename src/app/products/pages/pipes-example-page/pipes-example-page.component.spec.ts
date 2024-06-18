import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExamplePageComponent } from './pipes-example-page.component';

describe('PipesExamplePageComponent', () => {
  let component: PipesExamplePageComponent;
  let fixture: ComponentFixture<PipesExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesExamplePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
