import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddItemComponent } from './add-item.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have add data form table', () => {
    let formTable = fixture.debugElement.query(By.css('.table'))
    expect(formTable).toBeDefined()
  })

  it('should have add new button', () => {
    let addNewBtn = fixture.debugElement.query(By.css('.col-md-2'))
    expect(addNewBtn).toBeDefined()
    expect(addNewBtn.nativeElement.innerText).toBe('Add New Record')
  })

  it('should have submit button', () => {
    let subBtn = fixture.debugElement.query(By.css('.col-md-1'))
    expect(subBtn).toBeDefined()
    expect(subBtn.nativeElement.innerText).toBe('Submit')
  })
});
