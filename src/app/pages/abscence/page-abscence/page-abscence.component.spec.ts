import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbscenceComponent } from './page-abscence.component';

describe('PageAbscenceComponent', () => {
  let component: PageAbscenceComponent;
  let fixture: ComponentFixture<PageAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAbscenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
