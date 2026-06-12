import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  currentYear = new Date().getFullYear();

  footerData = [
    {
      title: "उत्पादन र सेवाहरू",
      items: [
        "गृहपृष्ठ", "अर्थ", "रातोपाटी स्पेसल", "मनोरञ्जन",
        "खेलकुद", "स्वास्थ्य शैली", "रातोपाटी स्टुडियो", "विश्व", "शिक्षा"
      ]
    },
    {
      title: "साहित्य",
      items: [
        "प्रविधि", "११ औं वार्षिकोत्सव विशेष", "क्रिकेट",
        "खेलकुद फिचर", "अर्थ", "रातोपाटी स्पेसल", "खेलकुद",
        "मनोरञ्जन", "स्वास्थ्य शैली"
      ]
    },
    {
      title: "रातोपाटी स्टुडियो",
      items: [
        "विश्व", "शिक्षा", "साहित्य", "११ औं वार्षिकोत्सव विशेष",
        "प्रविधि", "क्रिकेट", "खेलकुद फिचर", "उपनिर्वाचन २०७९",
        "उपनिर्वाचन २०८०"
      ]
    },
    {
      title: "स्थानीय तह निर्वाचन २०७९",
      items: ["सुरोचना विशेष", "टी–२० विश्वकप विशेष"]
    }
  ];
}