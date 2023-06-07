import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { GmapsService } from 'src/app/service/gmaps-service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  nomeCliente: string = '';


  @ViewChild('map', {static: true}) mapElementRef : ElementRef | undefined;
  googleMaps: any;
  center = {lat: -16.112725759170544, lng: -47.967683919020665};

  map: any;
  constructor(private authService: AuthService, private clienteService: ClienteService, private gmaps: GmapsService, private renderer: Renderer2) { }

  ngOnInit() {
    this.buscarDadosCliente();
  }

  ngAfterViewInit(){
    this.carregarMapa();
  }



  buscarDadosCliente() {
    const idCliente = this.authService.getCurrentUserId();
    if (idCliente) {
      this.clienteService.getDocById(idCliente).then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          this.nomeCliente = data['nome'];
        } else {
          // Documento não encontrado
          console.log('Documento não encontrado.');
        }
      })

    }
  }

  async carregarMapa() {
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      if (this.mapElementRef) {
        const mapEl = this.mapElementRef.nativeElement;
        const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
        this.map = new googleMaps.Map(mapEl, {
          center: location,
          zoom: 12,
        });
        this.renderer.addClass(mapEl, 'visible');
        this.addMarker(location)
      }
    } catch (e) {
      console.log('Erro ao carregar o google maps', e);
    }
  }

  addMarker(location: any){
    let googleMaps : any  = this.googleMaps;
    const icon = {
      url: 'assets/location.avif',
      scaledSize: new googleMaps.Size(50,50),
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      animation: googleMaps.Animation.DROP
    });
  }

  
}
