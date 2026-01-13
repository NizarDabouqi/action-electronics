import { Injectable } from '@angular/core';
import { Product, Color } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Samsung 4K Smart TV 55"',
      nameAr: 'تلفزيون سامسونج ذكي 4K 55 بوصة',
      price: 499.99,
      images: [
        'https://picsum.photos/400/400?random=1',
        'https://picsum.photos/400/400?random=2',
        'https://picsum.photos/400/400?random=3',
      ],
      characteristics: [
        '4K UHD Resolution',
        'Smart TV with built-in apps',
        '55 inch screen',
        'HDR support',
        'Voice control',
      ],
      characteristicsAr: [
        'دقة 4K UHD',
        'تلفزيون ذكي مع تطبيقات مدمجة',
        'شاشة 55 بوصة',
        'دعم HDR',
        'تحكم صوتي',
      ],
      availableColors: [{ name: 'Black', nameAr: 'أسود', hex: '#000000' }],
      description: 'Experience stunning 4K visuals with this Samsung Smart TV.',
      descriptionAr: 'استمتع بالصور المذهلة بدقة 4K مع تلفزيون سامسونج الذكي.',
    },
    {
      id: 2,
      name: 'LG Refrigerator 400L',
      nameAr: 'ثلاجة LG 400 لتر',
      price: 899.99,
      images: ['https://picsum.photos/400/400?random=4', 'https://picsum.photos/400/400?random=5'],
      characteristics: [
        '400L capacity',
        'Frost-free',
        'Energy efficient',
        'Smart inverter compressor',
        'LED lighting',
      ],
      characteristicsAr: ['سعة 400 لتر', 'خالي من الصقيع', 'موفر للطاقة', 'ضاغط ذكي', 'إضاءة LED'],
      availableColors: [
        { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
        { name: 'Black', nameAr: 'أسود', hex: '#000000' },
      ],
      description: 'Keep your food fresh with this spacious LG refrigerator.',
      descriptionAr: 'احتفظ بطعامك طازجاً مع هذه الثلاجة الواسعة من LG.',
    },
    {
      id: 3,
      name: 'Sony Wireless Headphones',
      nameAr: 'سماعات سوني لاسلكية',
      price: 199.99,
      images: ['https://picsum.photos/400/400?random=6', 'https://picsum.photos/400/400?random=7'],
      characteristics: [
        'Wireless Bluetooth',
        'Noise cancelling',
        '30-hour battery life',
        'Comfortable fit',
        'Built-in microphone',
      ],
      characteristicsAr: [
        'بلوتوث لاسلكي',
        'إلغاء الضوضاء',
        'بطارية تدوم 30 ساعة',
        'راحة في الارتداء',
        'ميكروفون مدمج',
      ],
      availableColors: [
        { name: 'Black', nameAr: 'أسود', hex: '#000000' },
        { name: 'White', nameAr: 'أبيض', hex: '#FFFFFF' },
        { name: 'Blue', nameAr: 'أزرق', hex: '#0000FF' },
      ],
      description: 'Immerse yourself in music with these premium wireless headphones.',
      descriptionAr: 'انغمس في الموسيقى مع هذه السماعات اللاسلكية الفاخرة.',
    },
    {
      id: 4,
      name: 'Dell Laptop Inspiron 15',
      nameAr: 'لابتوب ديل إنسبيرون 15',
      price: 749.99,
      images: ['https://picsum.photos/400/400?random=8', 'https://picsum.photos/400/400?random=9'],
      characteristics: [
        'Intel Core i5 processor',
        '8GB RAM',
        '256GB SSD',
        '15.6" Full HD display',
        'Windows 11',
      ],
      characteristicsAr: [
        'معالج Intel Core i5',
        'ذاكرة RAM 8GB',
        'تخزين SSD 256GB',
        'شاشة 15.6 بوصة Full HD',
        'ويندوز 11',
      ],
      availableColors: [
        { name: 'Black', nameAr: 'أسود', hex: '#000000' },
        { name: 'Silver', nameAr: 'فضي', hex: '#C0C0C0' },
      ],
      description: 'Powerful and portable laptop for work and entertainment.',
      descriptionAr: 'لابتوب قوي ومحمول للعمل والترفيه.',
    },
    {
      id: 5,
      name: 'KitchenAid Stand Mixer',
      nameAr: 'خلاط كيتشن إيد ثابت',
      price: 349.99,
      images: [
        'https://picsum.photos/400/400?random=10',
        'https://picsum.photos/400/400?random=11',
      ],
      characteristics: [
        '5-quart bowl',
        '10 speeds',
        'Multiple attachments',
        'Durable metal construction',
        'Easy to clean',
      ],
      characteristicsAr: [
        'وعاء سعة 5 لتر',
        '10 سرعات',
        'ملحقات متعددة',
        'بناء معدني متين',
        'سهل التنظيف',
      ],
      availableColors: [
        { name: 'Red', nameAr: 'أحمر', hex: '#FF0000' },
        { name: 'Black', nameAr: 'أسود', hex: '#000000' },
        { name: 'White', nameAr: 'أبيض', hex: '#FFFFFF' },
      ],
      description: 'Professional-grade stand mixer for all your baking needs.',
      descriptionAr: 'خلاط ثابت بمستوى احترافي لجميع احتياجات الخبز.',
    },
    {
      id: 6,
      name: 'Nintendo Switch OLED',
      nameAr: 'نينتندو سويتش OLED',
      price: 349.99,
      images: [
        'https://picsum.photos/400/400?random=12',
        'https://picsum.photos/400/400?random=13',
      ],
      characteristics: [
        '7-inch OLED screen',
        'Handheld and TV modes',
        'Wireless controllers',
        'HD rumble',
        'Enhanced audio',
      ],
      characteristicsAr: [
        'شاشة OLED 7 بوصة',
        'وضع محمول وتلفزيوني',
        'أجهزة تحكم لاسلكية',
        'اهتزاز HD',
        'صوت محسن',
      ],
      availableColors: [{ name: 'White', nameAr: 'أبيض', hex: '#FFFFFF' }],
      description: 'The ultimate gaming console that goes anywhere.',
      descriptionAr: 'وحدة الألعاب المثالية التي تذهب إلى أي مكان.',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
