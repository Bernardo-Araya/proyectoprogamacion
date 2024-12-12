import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPage } from './qr.page';
import { ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { of } from 'rxjs';

describe('QrPage', () => {
  let component: QrPage;
  let fixture: ComponentFixture<QrPage>;

  // Mocks de las dependencias
  const mockModalController = {
    create: jasmine.createSpy().and.returnValue({
      present: jasmine.createSpy(),
      onWillDismiss: jasmine.createSpy().and.returnValue(Promise.resolve({ data: { barcode: { displayValue: '123456' } } }))
    })
  };

  const mockToastController = {
    create: jasmine.createSpy().and.returnValue(Promise.resolve({
      present: jasmine.createSpy()
    }))
  };

  const mockLoadingController = {
    create: jasmine.createSpy().and.returnValue(Promise.resolve({
      present: jasmine.createSpy(),
      dismiss: jasmine.createSpy()
    }))
  };

  const mockAlertController = {
    create: jasmine.createSpy().and.returnValue(Promise.resolve({
      present: jasmine.createSpy(),
      onWillDismiss: jasmine.createSpy().and.returnValue(Promise.resolve())
    }))
  };

  const mockBarcodeScanner = {
    isSupported: jasmine.createSpy().and.returnValue(Promise.resolve(true)),
    checkPermissions: jasmine.createSpy().and.returnValue(Promise.resolve({ granted: true })),
    removeAllListeners: jasmine.createSpy(),
    readBarcodesFromImage: jasmine.createSpy().and.returnValue(Promise.resolve({ barcodes: [{ displayValue: '123456' }] }))
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrPage],
      providers: [
        { provide: ModalController, useValue: mockModalController },
        { provide: ToastController, useValue: mockToastController },
        { provide: LoadingController, useValue: mockLoadingController },
        { provide: AlertController, useValue: mockAlertController },
        { provide: BarcodeScanner, useValue: mockBarcodeScanner }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call startScan and update scanResult', async () => {
    await component.startScan();
    expect(component.scanResult).toBe('123456');
    expect(mockModalController.create).toHaveBeenCalled();
  });

});

