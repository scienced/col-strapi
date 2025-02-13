import type { Schema, Struct } from '@strapi/strapi';

export interface BannerCustomerStoryMainBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_customer_story_main_banners';
  info: {
    description: '';
    displayName: 'Customer Story Main Banner';
    icon: 'picture';
  };
  attributes: {
    BannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PersonName: Schema.Attribute.Text;
    Quote: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerHalfTextImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_half_text_image_banners';
  info: {
    displayName: 'Half Text Image Banner';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SectionQuote extends Struct.ComponentSchema {
  collectionName: 'components_section_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    Name: Schema.Attribute.Text;
    Quote: Schema.Attribute.Text;
  };
}

export interface SectionText extends Struct.ComponentSchema {
  collectionName: 'components_section_texts';
  info: {
    displayName: 'Text';
    icon: 'pencil';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.customer-story-main-banner': BannerCustomerStoryMainBanner;
      'banner.half-text-image-banner': BannerHalfTextImageBanner;
      'section.quote': SectionQuote;
      'section.text': SectionText;
    }
  }
}
