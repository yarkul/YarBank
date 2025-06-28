declare global {
  interface Window {
    ethereum?: any;
  }
}

import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({ providedIn: 'root' })
export class Web3Service {
  private provider!: ethers.BrowserProvider;
  public address: string | null = null;

  async connectWallet(): Promise<void> {
    if (!window.ethereum) {
      alert('MetaMask is not installed');
      return;
    }

    this.provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await this.provider.send('eth_requestAccounts', []);
    this.address = accounts[0];
  }

  getShortAddress(): string {
    return this.address
      ? `${this.address.substring(0, 6)}...${this.address.slice(-4)}`
      : '';
  }
}
