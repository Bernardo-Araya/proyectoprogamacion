import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantePage } from './estudiante.page';
import { ApirestService } from '../api/apirest.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EstudiantePage', () => {
  let component: EstudiantePage;
  let fixture: ComponentFixture<EstudiantePage>;
  let apirestServiceMock: jasmine.SpyObj<ApirestService>;

  beforeEach(() => {
    // Mock del servicio ApirestService
    apirestServiceMock = jasmine.createSpyObj('ApirestService', ['getAsignaturas']);
    
    // Configuración del TestBed
    TestBed.configureTestingModule({
      declarations: [EstudiantePage],
      providers: [
        { provide: ApirestService, useValue: apirestServiceMock },
        { 
          provide: ActivatedRoute, 
          useValue: { paramMap: of({ get: () => '1' }) } // Mock del ActivatedRoute
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listar and getAsignaturas on ngOnInit', async () => {
    // Simulamos la respuesta de getAsignaturas
    apirestServiceMock.getAsignaturas.and.returnValue(Promise.resolve([
      { id: 1, nombre: 'Arquitectura', seccion: '001D' },
      { id: 2, nombre: 'Programación', seccion: '001D' }
    ]));

    // Llamamos al método listar
    await component.ngOnInit();

    // Verificamos que getAsignaturas haya sido llamado
    expect(apirestServiceMock.getAsignaturas).toHaveBeenCalled();

    // Verificamos que el listado tenga los datos correctos
    expect(component.listado).toEqual([
      { id: 1, nombre: 'Arquitectura', seccion: '001D' },
      { id: 2, nombre: 'Programación', seccion: '001D' }
    ]);
  });
});
