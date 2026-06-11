import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nanditravelsvaranasi.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  
    {
      url: 'https://nanditravelsvaranasi.com/varanasi-to-ayodhya-taxi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
//     {
//       url: 'https://nanditravelsvaranasi.com/airport-taxi-varanasi',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.9,
//     },
//     {
//       url: 'https://nanditravelsvaranasi.com/varanasi-to-prayagraj-cab',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.9,
//     },
//     {
//       url: 'https://nanditravelsvaranasi.com/vindhyachal-taxi',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://nanditravelsvaranasi.com/varanasi-to-bodhgaya-taxi',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://nanditravelsvaranasi.com/railway-station-taxi-varanasi',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://nanditravelsvaranasi.com/outstation-cab-varanasi',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
   ]
 }
 