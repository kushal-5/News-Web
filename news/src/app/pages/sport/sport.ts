import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sport.html',
  styleUrl: './sport.css',
})
export class Sport {
  eventData = [
    {
      nepaliDate: '२०७९/०५/१५',
      title: 'घटस्थापना',
      subtitle: 'नवरात्रिको पहिलो दिन',
    },
    {
      nepaliDate: '२०७९/०५/२५',
      title: 'महानवमी',
      subtitle: 'महिषासुर मर्दिनीको पूजा',
    },
    {
      nepaliDate: '२०७९/०५/२६',
      title: 'विजया दशमी',
      subtitle: 'टिका, जमरा लगाउने दिन',
    },
    {
      nepaliDate: '२०७९/०५/२३',
      title: 'फूलपाती',
      subtitle: 'देवीलाई फूलपाती अर्पण गर्ने दिन',
    },
    {
      nepaliDate: '२०७९/०५/२६',
      title: 'विजया दशमी',
      subtitle: 'टिका, जमरा लगाउने दिन',
    },
    {
      nepaliDate: '२०७९/०५/२६',
      title: 'विजया दशमी',
      subtitle: 'टिका, जमरा लगाउने दिन',
    },
    {
      nepaliDate: '२०७९/०५/२६',
      title: 'विजया दशमी',
      subtitle: 'टिका, जमरा लगाउने दिन',
    },
  ];

  cardData = [
    {
      id: 1,
      imageUrl: '/sport/two.png',
      title: 'रियलबाट बिदा भए भाज्क्वेज',
    },
    {
      id: 2,
      imageUrl: '/sport/play.png',
      title: 'श्रीलंकाको पोस्टमा नेपालको फेरि पनि ७ गोल',
    },
    {
      id: 3,
      imageUrl: '/sport/girls.png',
      title: 'साफ यू–२० महिला च्याम्पियनसिप',
    },
    {
      id: 4,
      imageUrl: '/sport/trophy.png',
      title: 'सहिद स्मारक ए–डिभिजन लिग',
    },
  ];

  scroll(container: HTMLElement, direction: string) {
    const amount = 300;

    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }
}