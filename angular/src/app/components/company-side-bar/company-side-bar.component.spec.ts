import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanySideBarComponent } from './company-side-bar.component';
import { By } from '@angular/platform-browser'
import { DataService } from 'src/app/services/data.service';
import { MockdataService } from 'src/app/services/mockdata.service';
import { of } from 'rxjs';

describe('CompanySideBarComponent', () => {
  let component: CompanySideBarComponent;
  let fixture: ComponentFixture<CompanySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySideBarComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: DataService, useClass: MockdataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have company logo', () => {
    let imageDiv = fixture.debugElement.query(By.css('.logo'))
    expect(imageDiv).toBeDefined()
  })

  it('should have company description', () => {
    component.ngOnInit()
    fixture.detectChanges()
    let descriptionDiv = fixture.debugElement.query(By.css('#description'))
    expect(descriptionDiv).toBeDefined();
  })

});
