import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "ASENP Quality Consulting - Servicios Legales, Impositivos y Contables",
  description = "ASENP Quality Consulting, SRL ofrece servicios profesionales legales, impositivos y contables con más de 10 años de experiencia y más de 40 empresas atendidas.",
  keywords = "servicios legales, servicios impositivos, servicios contables, constitución empresas, DGII, República Dominicana, asesoría legal, consultoría fiscal",
  image = "https://asenp-quality-consulting.vercel.app/logo-asenp--transparente1-14.png",
  url = "https://asenp-quality-consulting.vercel.app/",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;