import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaAlumnoPage } from './asistencia-alumno.page';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../api/apirest.service';
import { of } from 'rxjs';

describe('AsistenciaAlumnoPage', () => {
  let component: AsistenciaAlumnoPage;
  let fixture: ComponentFixture<AsistenciaAlumnoPage>;
  let apirestServiceMock: jasmine.SpyObj<ApirestService>;

  beforeEach(() => {
    // Crea un mock para ApirestService
    apirestServiceMock = jasmine.createSpyObj('ApirestService', ['getAsignatura', 'getClases']);
    
    // Define el comportamiento de las funciones del mock
    apirestServiceMock.getAsignatura.and.returnValue(Promise.resolve({ nombre: 'Programación' }));
    apirestServiceMock.getClases.and.returnValue(Promise.resolve([]));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Importa el RouterTestingModule
      declarations: [AsistenciaAlumnoPage],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { paramMap: of(new Map([['id', '1']])) } // Mock de ActivatedRoute
        },
        { provide: ApirestService, useValue: apirestServiceMock } // Mock del servicio ApirestService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAsignatura when id is provided in route params', () => {
    expect(apirestServiceMock.getAsignatura).toHaveBeenCalledWith('1');
  });

  it('should call getClases on init', () => {
    expect(apirestServiceMock.getClases).toHaveBeenCalled();
  });
});
