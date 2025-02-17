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
    Dark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Quote: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerHalfTextImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_half_text_image_banners';
  info: {
    description: '';
    displayName: 'Half Text Image Banner';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Paragraph: Schema.Attribute.Component<'section.text', true>;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    displayName: 'SEO';
    icon: 'command';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
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
    description: '';
    displayName: 'Paragraph';
    icon: 'pencil';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface ThumbnailCustomerStoryThumbnail
  extends Struct.ComponentSchema {
  collectionName: 'components_thumbnail_customer_story_thumbnails';
  info: {
    description: '';
    displayName: 'Customer Story Thumbnail';
    icon: 'picture';
  };
  attributes: {
    BrandName: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.customer-story-main-banner': BannerCustomerStoryMainBanner;
      'banner.half-text-image-banner': BannerHalfTextImageBanner;
      'general.seo': GeneralSeo;
      'section.quote': SectionQuote;
      'section.text': SectionText;
      'thumbnail.customer-story-thumbnail': ThumbnailCustomerStoryThumbnail;
    }
  }
}
