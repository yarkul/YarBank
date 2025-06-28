import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Web3Service } from '../../services/web3.service';

@Component({
  selector: 'app-wallet-connect',
  standalone:true,
  imports: [ButtonModule],
  templateUrl: './wallet-connect.html',
  styleUrl: './wallet-connect.scss'
})
export class WalletConnect {
  constructor(public web3: Web3Service) {}
  
  connect(): void {
      this.web3.connectWallet();
    }
}
