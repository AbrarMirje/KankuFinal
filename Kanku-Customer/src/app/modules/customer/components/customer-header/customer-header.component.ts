import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage.service';
import { ProductListService } from '../../services/product-list.service';
import { Category } from '../../services/interfaces/product.interface';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  constructor(private storage: StorageService,
              private service: ProductListService) {}

  category: Category[] = [];
  
  
  isUserLoggedIn: Boolean = false;
  user = {
    fullName: "",
    username: ""
  }

  ngOnInit(): void {
    if (this.storage.getUser() !== null && this.storage.getToken() !== null) {
      this.isUserLoggedIn = true;
      this.user = this.storage.getUser();
    }
    this.storage.isTokenExpired();

    // Fetch categories
    this.service.getProductCategories()
    .subscribe(
      (category: Category[]) => {
        console.log(category); 
        this.category = category;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
    
  }

  logout() {
    this.storage.logout();
  }
}
