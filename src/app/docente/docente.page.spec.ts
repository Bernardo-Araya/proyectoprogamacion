import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentePage } from './docente.page';
import { ApirestService } from 'src/app/api/apirest.service';
import { of } from 'rxjs';

describe('DocentePage', () => {
  let component: DocentePage;
  let fixture: ComponentFixture<DocentePage>;
  let apiRestServiceSpy: jasmine.SpyObj<ApirestService>;

  beforeEach(async () => {
    // Crea un mock del servicio ApirestService
    const spy = jasmine.createSpyObj('ApirestService', ['getAsignaturas']);

    await TestBed.configureTestingModule({
      declarations: [DocentePage],
      providers: [{ provide: ApirestService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(DocentePage);
    component = fixture.componentInstance;
    apiRestServiceSpy = TestBed.inject(ApirestService) as jasmine.SpyObj<ApirestService>;
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar las asignaturas correctamente', async () => {
    const mockAsignaturas = [{ id: 1, nombre: 'Matemáticas' }, { id: 2, nombre: 'Lengua' }];
    apiRestServiceSpy.getAsignaturas.and.returnValue(Promise.resolve(mockAsignaturas));

    await component.cargarAsignaturas();

    expect(component.listado).toEqual(mockAsignaturas);
    expect(apiRestServiceSpy.getAsignaturas).toHaveBeenCalled();
  });

  it('debe manejar errores al cargar asignaturas', async () => {
    apiRestServiceSpy.getAsignaturas.and.returnValue(Promise.reject(new Error('Error en el servicio')));

    
    await component.cargarAsignaturas();

    expect(component.listado).toEqual([]);
    expect(apiRestServiceSpy.getAsignaturas).toHaveBeenCalled();
  });
});