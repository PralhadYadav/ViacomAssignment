import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list table', () => {
    let listTable = fixture.debugElement.query(By.css('.table'))
    expect(listTable).toBeDefined()
  })

  it('should have 4 columns',()=>{
    let tableHeader = fixture.nativeElement.querySelectorAll('th')
    expect(tableHeader.length).toBe(4)
  })
});
