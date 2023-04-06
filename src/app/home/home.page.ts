import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MaterialModule, FormsModule, CommonModule],
})
export class HomePage implements OnInit {
  @ViewChild('addCategory') addCategory!: TemplateRef<any>;
  student_info = {} as AddUpdateStudentDetails;
  studentList: any = [];
  isUpdate = false;


  constructor(
    public dialog: MatDialog, public homeService: HomeService, private sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
    this.studentList = this.homeService.getTodos();
    console.log(this.studentList);
  }
  addAgentObj: any

  openModal(data: any, isEdit: boolean) {
    if (isEdit) {
      this.student_info = data;
      this.isUpdate = isEdit;
    }
    const dialogRef = this.dialog.open(this.addCategory, {
      width: '50vw',
      height: '100vh',
      position: {
        top: '0',
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  addUpdateDetails() {
    if (!this.isUpdate) {
      console.log(this.student_info.IMAGE, "image");
      let obj = new AddUpdateStudentDetails();
      obj.NAME = this.student_info.NAME;
      obj.IMAGE = this.student_info.IMAGE;

      obj.ADDRESS = this.student_info.ADDRESS;
      obj.STUDENT_ID = this.student_info.STUDENT_ID;
      console.log(obj, "obj");

      this.homeService.addTodo(obj);
      this.dialog.closeAll();
      this.ngOnInit();
      // window.location.reload();
    } else {
      let obj = new AddUpdateStudentDetails();
      obj.NAME = this.student_info.NAME;
      obj.IMAGE = this.student_info.IMAGE;
      obj.ADDRESS = this.student_info.ADDRESS;
      obj.STUDENT_ID = this.student_info.STUDENT_ID;
      this.homeService.updateTodo(this.student_info, obj);
      this.dialog.closeAll();
      this.ngOnInit();
    }

  }
  removeFunc(data: string) {
    this.homeService.deleteTodo(data);
    this.ngOnInit();
  }

  onFileSelected(event: any) {
    console.log("sdfasdfsdfd");

    // const file: File = event.target.files[0];
    // if (file) {
    //   this.readFile(file);
    // }
    this.student_info.IMAGE = event.target.files[0];
    console.log(this.student_info.IMAGE, ">>>>>>>>>");

    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    let imgURL;
    reader.onload = function () {
      imgURL = reader.result;
      console.log(imgURL, "imgURL");

      const img: any = document.createElement("img");
      img.src = imgURL;
      const container = document.getElementById("image-container");
      container?.appendChild(img);
    }
    this.student_info.IMAGE = imgURL;
    console.log("");

  }

  // readFile(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const pdfUrl = URL.createObjectURL(
  //       new Blob([reader.result as BlobPart], { type: 'image/jpeg' })
  //     );
  //     this.student_info.IMAGE = pdfUrl;
  //     this.student_info.IMAGE = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  //   }
  //   reader.readAsArrayBuffer(file);
  // }

  takeScreenshot() {
    const element: any = document.getElementById('myElement');

    // Use html2canvas to take a screenshot of the element
    html2canvas(element).then(canvas => {
      // Convert the canvas to an image data URL
      const imageDataUrl = canvas.toDataURL();

      // Display the image in a new window
      const image = new Image();
      image.src = imageDataUrl;
      const w: any = window.open("");
      w.document.write(image.outerHTML);
    });
  }
}

export class AddUpdateStudentDetails {
  NAME: any;
  ADDRESS: any;
  STUDENT_ID: any;
  IMAGE: any;
}
