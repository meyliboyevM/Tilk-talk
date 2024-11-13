import {Component, signal} from '@angular/core';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';
import {DndDirective} from '../../../common-ui/directives/dnd.directive';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [
    SvgIconComponent,
    DndDirective,
    FormsModule
  ],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {

  preview = signal<string>('/assets/images/avatar-pl.jpg')
  avatar: File | null = null;

  fileBrowserHandle(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.processFile(file);
  }

  onFileDropped(event: File) {
    this.processFile(event);
  }

  processFile(file: File | null | undefined) {
    // if (!file || !file.type.match('image')) return
    if (!file) return

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.preview.set(e.target.result.toString())
    }
    reader.readAsDataURL(file);

    this.avatar = file
  }
}
