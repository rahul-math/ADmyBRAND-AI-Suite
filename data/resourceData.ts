

import React from 'react';
import { ResourceCategory } from '../types';
import {
  SoundWaveIcon, AiBotIcon, PixelIcon, DataBoxIcon, ChartBarIcon,
  BlockchainIcon, RocketIcon, EyeIcon, SocialIcon, BillboardIcon,
  ScreenDeviceIcon, MobileDeviceIcon, NewspaperIcon, ChecklistIcon,
  SearchIcon, DesignToolIcon, CodeIcon, PageIcon, DashboardIcon,
  FeedbackIcon, UsersIcon, LoanIcon, ShieldIcon
} from '../components/ui/resourceIcons';


export const resourceData: ResourceCategory[] = [
  {
    name: 'IOT & AI',
    items: [
      {
        icon: React.createElement(SoundWaveIcon),
        title: 'Listen',
        description: 'Identify Radio ad audience with audio QR codes',
        bgColor: '#ef0089',
        href: 'https://play.google.com/store/apps/details?id=com.admybrand.listen.listen&hl=en'
      },
      {
        icon: React.createElement(AiBotIcon),
        title: 'Adify',
        description: 'AI based personal Assistant to plan, book & manage your ads',
        bgColor: '#00aeef',
        href: 'https://www.admybrand.com/adify'
      },
      {
        icon: React.createElement(PixelIcon),
        title: 'Pixel',
        description: 'Identify and re-target TV ads to viewers on other ad mediums',
        bgColor: '#0055ff',
        href: 'https://pixel.admybrand.com/'
      },
      {
        icon: React.createElement(DataBoxIcon),
        title: 'Box',
        description: 'Big data solution for retargeting TV and Radio ads to mobile devices',
        bgColor: '#00a859',
        href: 'https://box.admybrand.com/'
      },
    ],
  },
  {
    name: 'Get Analytics',
    items: [
        {
            icon: React.createElement(ChartBarIcon),
            title: 'ARP',
            description: 'Real time rating & analytics for ad spaces',
            bgColor: '#2752fe',
            href: 'https://arp.admybrand.com/'
        },
        {
            icon: React.createElement(SearchIcon),
            title: 'AnalyzeMyAd',
            description: 'Analyze & Strategize Advertisement Campaign',
            bgColor: '#dd0000',
            href: 'https://www.analyzemyad.com/'
        },
        {
            icon: React.createElement(BlockchainIcon),
            title: 'Ambicash',
            description: 'Blockchain based solution for mobile ad analytics',
            bgColor: '#8a2be2',
            href: 'https://www.ambicash.com/'
        },
        {
            icon: React.createElement(RocketIcon),
            title: 'Boost',
            description: 'Re-targeting and Identifying TV and Radio Analytics',
            bgColor: '#5a34ab',
            href: 'https://boost.admybrand.com/'
        },
        {
            icon: React.createElement(EyeIcon),
            title: 'VIA',
            description: 'Visibility scoring for Outdoor & OOH ad media',
            bgColor: '#212121',
            href: 'https://via.admybrand.com/'
        },
        {
            icon: React.createElement(SocialIcon),
            title: 'Social Media Listening',
            description: 'See whats trending on Social Media',
            bgColor: '#f0f0f0',
            href: 'https://www.admybrand.com/social/search'
        },
    ]
  },
  {
    name: 'For Sellers',
    items: [
        { icon: React.createElement(BillboardIcon), title: 'Ad8Hoarding', description: 'Hoarding & Fixed Media Advertising Platform', bgColor: '#0084ff', href: 'https://www.8hoarding.com/' },
        { icon: React.createElement(BillboardIcon), title: 'Ad8OOH', description: 'Avenue & Movable Media Advertising Platform', bgColor: '#ffc000', href: 'https://www.ad8ooh.com/' },
        { icon: React.createElement(ScreenDeviceIcon), title: '8DigiAd', description: 'Book ads on Digital Screens & LCDs', bgColor: '#92c13d', href: 'https://www.8digiad.com/' },
        { icon: React.createElement(MobileDeviceIcon), title: 'Ad8Mobi', description: 'Mobile Advertising Platform', bgColor: '#f7931e', href: 'https://www.ad8mobi.com/' },
        { icon: React.createElement(NewspaperIcon), title: 'Ad8Paper', description: 'Newspaper Advertising Platform', bgColor: '#00a859', href: 'https://www.ad8paper.com/' },
        { icon: React.createElement(SoundWaveIcon), title: 'Ad8Radio', description: 'Radio Advertising Platform', bgColor: '#8b4513', href: 'https://www.ad8radio.com/' },
        { icon: React.createElement(ScreenDeviceIcon), title: 'Ad8TV', description: 'Television Advertising Platform', bgColor: '#c3258c', href: 'https://www.ad8tv.com/' },
        { icon: React.createElement(ChecklistIcon), title: 'Ad8Plan', description: 'Manage Inventory & Lead Generation for media sellers', bgColor: '#00a99d' },
    ]
  },
  {
    name: 'Book & Analyze',
    items: [
        { icon: React.createElement(BillboardIcon), title: 'Ad8Hoarding', description: 'Hoarding & Fixed Media Advertising Platform', bgColor: '#0084ff', href: 'https://www.8hoarding.com/' },
        { icon: React.createElement(BillboardIcon), title: 'Ad8OOH', description: 'Avenue & Movable Media Advertising Platform', bgColor: '#ffc000', href: 'https://www.ad8ooh.com/' },
        { icon: React.createElement(ScreenDeviceIcon), title: '8DigiAd', description: 'Book ads on Digital Screens & LCDs', bgColor: '#92c13d', href: 'https://www.8digiad.com/' },
        { icon: React.createElement(MobileDeviceIcon), title: 'Ad8Mobi', description: 'Mobile Advertising Platform', bgColor: '#f7931e', href: 'https://www.ad8mobi.com/' },
        { icon: React.createElement(NewspaperIcon), title: 'Ad8Paper', description: 'Newspaper Advertising Platform', bgColor: '#00a859', href: 'https://www.ad8paper.com/' },
        { icon: React.createElement(SoundWaveIcon), title: 'Ad8Radio', description: 'Radio Advertising Platform', bgColor: '#8b4513', href: 'https://www.ad8radio.com/' },
        { icon: React.createElement(ScreenDeviceIcon), title: 'Ad8TV', description: 'Television Advertising Platform', bgColor: '#c3258c', href: 'https://www.ad8tv.com/' },
        { icon: React.createElement(SocialIcon), title: 'Ad8Social', description: 'Book Ads for Web Presence & on Social Media', bgColor: '#00a99d', href: 'https://www.ad8social.com/' },
    ]
  },
  {
    name: 'Search & Explore',
    items: [
        { icon: React.createElement(SearchIcon), title: 'Calci', description: 'Search Engine for Ad spaces', bgColor: '#0055ff', href: 'https://calci.admybrand.com/' },
        { icon: React.createElement(DesignToolIcon), title: '8Surface', description: 'Do-it-Yourself tool for creating ad designs', bgColor: '#00bfff', href: 'https://www.8surface.com/' },
        { icon: React.createElement(CodeIcon), title: 'Ambicode', description: 'Allocating adspaces with universal codes', bgColor: '#2c3e50', href: 'https://www.admybrand.com/ambicode' },
        { icon: React.createElement(PageIcon), title: 'Pages', description: 'Empowers ad sellers with online presence', bgColor: '#4a5568', href: 'https://www.admybrand.com/home/companylogin' },
        { icon: React.createElement(SearchIcon), title: 'Search Seller', description: 'Search engine for ad spaces sellers', bgColor: '#2c3e50', href: 'https://www.admybrand.com/Search/MediaSellers' },
        { icon: React.createElement(DesignToolIcon), title: 'InventMyAd', description: 'Create & Design Advertisement Campaign', bgColor: '#212121', href: 'https://www.inventmyad.com/' },
        { icon: React.createElement(DashboardIcon), title: 'Console', description: 'Single dashboard to monitor all campaigns', bgColor: '#e2e8f0' },
    ]
  },
  {
    name: 'Grow Your Business',
    items: [
      {
        icon: React.createElement(FeedbackIcon),
        title: 'Zeedback',
        description: 'Get feedback and generate surveys for your ad viewers and clients',
        bgColor: '#6A3DE8',
        href: 'https://www.zeedback.com/'
      },
      {
        icon: React.createElement(UsersIcon),
        title: '8Chat',
        description: 'Professional Networking for Marketing professionals',
        bgColor: '#58b99c',
        href: 'https://8chat.admybrand.com/'
      },
      {
        icon: React.createElement(SocialIcon),
        title: 'Clicko',
        description: 'Single platform for social media management',
        bgColor: '#0084ff',
        href: 'https://clicko.admybrand.com/'
      },
    ],
  },
  {
    name: 'Others',
    items: [
      {
        icon: React.createElement(LoanIcon),
        title: 'Ambloan',
        description: 'Get working capital Loans for your marketing campaigns',
        bgColor: '#c32555',
        href: 'https://www.admybrand.com/home/applyloan'
      },
      {
        icon: React.createElement(ShieldIcon),
        title: 'Ambsure',
        description: 'Insure your Marketing campaigns against uncertainties',
        bgColor: '#00a599',
        href: 'https://www.admybrand.com/home/insurance'
      },
    ],
  },
];