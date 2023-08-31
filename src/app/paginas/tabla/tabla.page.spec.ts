import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaPage } from './tabla.page';

describe('TablaPage', () => {
  let component: TablaPage;
  let fixture: ComponentFixture<TablaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TablaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
