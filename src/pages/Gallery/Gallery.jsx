import React from 'react';
import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryStatistics from '../../components/Gallery/GalleryStatistics';
import FeaturedGallery from '../../components/Gallery/FeaturedGallery';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import EventGalleries from '../../components/Gallery/EventGalleries';
import VideoGallery from '../../components/Gallery/VideoGallery';
import VirtualTour from '../../components/Gallery/VirtualTour';
import AchievementGallery from '../../components/Gallery/AchievementGallery';
import RecentUploads from '../../components/Gallery/RecentUploads';
import GalleryCTA from '../../components/Gallery/GalleryCTA';

const Gallery = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <GalleryHero />
      <GalleryStatistics />
      <FeaturedGallery />
      <GalleryGrid />
      <RecentUploads />
      <EventGalleries />
      <VideoGallery />
      <AchievementGallery />
      <VirtualTour />
      <GalleryCTA />
    </div>
  );
};

export default Gallery;
