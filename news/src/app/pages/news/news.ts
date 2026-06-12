import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.services';
import { NewsItem } from '../../models/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})
export class News implements OnInit {
  private newsService = inject(NewsService);
  private cdr = inject(ChangeDetectorRef);

  newsList: NewsItem[] = [];
  originalNewsList: NewsItem[] = [];

  sources: string[] = [];
  selectedSource: string = 'सबै';

  sourceLogoMap: { [key: string]: string } = {};

  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.isLoading = true;

    this.newsService.getNews().subscribe({
      next: (response) => {
        this.newsList = response?.data ?? [];
        this.originalNewsList = this.newsList;

        this.newsList.forEach(item => {
          if (item.source && item.source_logo) {
            this.sourceLogoMap[item.source] = item.source_logo;
          }
        });

        const uniqueSources = new Set(
          this.newsList.map(item => item.source).filter(Boolean)
        );

        this.sources = ['सबै', ...Array.from(uniqueSources)];

        this.isLoading = false;
        this.errorMessage = this.newsList.length ? '' : 'No data found.';

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Could not load news.';
        this.isLoading = false;

        this.cdr.markForCheck();
      }
    });
  }

  filterBySource(source: string) {
    this.selectedSource = source;

    if (source === 'सबै') {
      this.newsList = this.originalNewsList;
    } else {
      this.newsList = this.originalNewsList.filter(
        item => item.source === source
      );
    }

    this.cdr.markForCheck();
  }

  //  GET LOGO FROM MAP (for sidebar)
  getSourceLogo(source: string): string {
    return this.sourceLogoMap[source] || 'hamropatro.png';
  }

  // FALLBACK
  onLogoError(event: any) {
    event.target.src = 'assets/default-logo.png';
  }
}