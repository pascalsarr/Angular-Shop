import { Product } from '../../../shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	private sub: any;
	product: Product;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private toastrService: ToastrService
	) {
		this.product = new Product();
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			const id = params['id']; // (+) converts string 'id' to a number
			this.getProductDetail(id);
		});
	}

	 imageZoom(imgID : any, resultID : any) {
		var img:any, lens:any, result:any, cx:any, cy:any;
		img = document.getElementById(imgID);
		result = document.getElementById(resultID);
		/*create lens:*/
		lens = document.createElement("DIV");
		lens.setAttribute("class", "img-zoom-lens");
		/*insert lens:*/
		img.parentElement.insertBefore(lens, img);
		/*calculate the ratio between result DIV and lens:*/
		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;
		/*set background properties for the result DIV:*/
		result.style.backgroundImage = "url('" + img.src + "')";
		result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
		/*execute a function when someone moves the cursor over the image, or the lens:*/
		lens.addEventListener("mousemove", moveLens);
		img.addEventListener("mousemove", moveLens);
		/*and also for touch screens:*/
		lens.addEventListener("touchmove", moveLens);
		img.addEventListener("touchmove", moveLens);
		function moveLens(e:any) {
			var pos:any, x:any, y:any;
			/*prevent any other actions that may occur when moving over the image:*/
			e.preventDefault();
			/*get the cursor's x and y positions:*/
			pos = getCursorPos(e);
			/*calculate the position of the lens:*/
			x = pos.x - (lens.offsetWidth / 2);
			y = pos.y - (lens.offsetHeight / 2);
			/*prevent the lens from being positioned outside the image:*/
			if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
			if (x < 0) {x = 0;}
			if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
			if (y < 0) {y = 0;}
			/*set the position of the lens:*/
			lens.style.left = x + "px";
			lens.style.top = y + "px";
			/*display what the lens "sees":*/
			result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
		}
		function getCursorPos(e:any) {
			var a:any, x = 0, y = 0;
			e = e || window.event;
			/*get the x and y positions of the image:*/
			a = img.getBoundingClientRect();
			/*calculate the cursor's x and y coordinates, relative to the image:*/
			x = e.pageX - a.left;
			y = e.pageY - a.top;
			/*consider any page scrolling:*/
			x = x - window.pageXOffset;
			y = y - window.pageYOffset;
			return {x : x, y : y};
		}
	}

	getProductDetail(id: string) {
		// this.spinnerService.show();
		const x = this.productService.getProductById(id);
		x.snapshotChanges().subscribe(
			(product) => {
				// this.spinnerService.hide();
				const y = product.payload.toJSON() as Product;

				y['$key'] = id;
				this.product = y;
			},
			(error) => {
				this.toastrService.error('Error while fetching Product Detail', error);
			}
		);
	}

	addToCart(product: Product) {
		this.productService.addToCart(product);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
