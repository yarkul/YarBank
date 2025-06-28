import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WalletConnect } from './components/wallet-connect/wallet-connect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WalletConnect ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Yarbank - Crypto App';
}
