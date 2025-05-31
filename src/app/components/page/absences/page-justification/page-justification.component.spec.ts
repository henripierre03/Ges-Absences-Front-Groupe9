import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJustificationComponent } from './page-justification.component';

describe('PageJustificationComponent', () => {
  let component: PageJustificationComponent;
  let fixture: ComponentFixture<PageJustificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageJustificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
