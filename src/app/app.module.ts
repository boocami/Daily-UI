import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { CreditCardCheckoutComponent } from './Componentes/credit-card-checkout/credit-card-checkout.component';
import { LandingPageComponent } from './Componentes/landing-page/landing-page.component';
import { CalculatorComponent } from './Componentes/calculator/calculator.component';
import { AppIconComponent } from './Componentes/app-icon/app-icon.component';
import { UserProfileComponent } from './Componentes/user-profile/user-profile.component';
import { SettingsComponent } from './Componentes/settings/settings.component';
import { MusicPlayerComponent } from './Componentes/music-player/music-player.component';
import { FourHundredFourPageComponent } from './Componentes/four-hundred-four-page/four-hundred-four-page.component';
import { FlashMessageComponent } from './Componentes/flash-message/flash-message.component';
import { ECommerceShopComponent } from './Componentes/e-commerce-shop/e-commerce-shop.component';
import { DirectMessagingComponent } from './Componentes/direct-messaging/direct-messaging.component';
import { CountdownTimerComponent } from './Componentes/countdown-timer/countdown-timer.component';
import { OffSwitchComponent } from './Componentes/On/off-switch/off-switch.component';
import { PopUpComponent } from './Componentes/pop-up/pop-up.component';
import { EmailReceiptComponent } from './Componentes/email-receipt/email-receipt.component';
import { AnalyticsChartComponent } from './Componentes/analytics-chart/analytics-chart.component';
import { LeaderboardComponent } from './Componentes/leaderboard/leaderboard.component';
import { LocationTrackerComponent } from './Componentes/location-tracker/location-tracker.component';
import { HomeMonitoringDashboardComponent } from './Componentes/home-monitoring-dashboard/home-monitoring-dashboard.component';
import { SearchComponent } from './Componentes/search/search.component';
import { OnboardingComponent } from './Componentes/onboarding/onboarding.component';
import { BoardingPassComponent } from './Componentes/boarding-pass/boarding-pass.component';
import { TvAppComponent } from './Componentes/tv-app/tv-app.component';
import { SubscribeComponent } from './Componentes/subscribe/subscribe.component';
import { ContactUsComponent } from './Componentes/contact-us/contact-us.component';
import { MapComponent } from './Componentes/map/map.component';
import { PricingComponent } from './Componentes/pricing/pricing.component';
import { FileComponent } from './Componentes/file/file.component';
import { UploadComponent } from './Componentes/upload/upload.component';
import { CrowdfundingCampaignComponent } from './Componentes/crowdfunding-campaign/crowdfunding-campaign.component';
import { CustomizeProductComponent } from './Componentes/customize-product/customize-product.component';
import { CarInterfaceComponent } from './Componentes/car-interface/car-interface.component';
import { BlogPostComponent } from './Componentes/blog-post/blog-post.component';
import { SpecialOfferComponent } from './Componentes/special-offer/special-offer.component';
import { WeatherComponent } from './Componentes/weather/weather.component';
import { CalendarComponent } from './Componentes/calendar/calendar.component';
import { TestimonialsComponent } from './Componentes/testimonials/testimonials.component';
import { RecipeComponent } from './Componentes/recipe/recipe.component';
import { WorkoutTrackerComponent } from './Componentes/workout-tracker/workout-tracker.component';
import { ToDoListComponent } from './Componentes/to-do-list/to-do-list.component';
import { DrinkMenuComponent } from './Componentes/Food/drink-menu/drink-menu.component';
import { FavoritesComponent } from './Componentes/favorites/favorites.component';
import { InfoCardComponent } from './Componentes/info-card/info-card.component';
import { InvoiceComponent } from './Componentes/invoice/invoice.component';
import { ActivityFeedComponent } from './Componentes/activity-feed/activity-feed.component';
import { ComingSoonComponent } from './Componentes/coming-soon/coming-soon.component';
import { NotificationsComponent } from './Componentes/notifications/notifications.component';
import { JobListingComponent } from './Componentes/job-listing/job-listing.component';
import { PressPageComponent } from './Componentes/press-page/press-page.component';
import { LogoDesignComponent } from './Componentes/logo-design/logo-design.component';
import { HeaderNavigationComponent } from './Componentes/header-navigation/header-navigation.component';
import { ConfirmationComponent } from './Componentes/confirmation/confirmation.component';
import { IconSetComponent } from './Componentes/icon-set/icon-set.component';
import { BreadcrumbsComponent } from './Componentes/breadcrumbs/breadcrumbs.component';
import { VideoPlayerComponent } from './Componentes/video-player/video-player.component';
import { ShoppingCartComponent } from './Componentes/shopping-cart/shopping-cart.component';
import { BackgroundPatternComponent } from './Componentes/background-pattern/background-pattern.component';
import { ColorPickerComponent } from './Componentes/color-picker/color-picker.component';
import { RedeemCouponComponent } from './Componentes/redeem-coupon/redeem-coupon.component';
import { WorkoutOfTheDayComponent } from './Componentes/workout-of-the-day/workout-of-the-day.component';
import { BestOfTwoThousandAndFifteenComponent } from './Componentes/best-of-two-thousand-and-fifteen/best-of-two-thousand-and-fifteen.component';
import { SelectUserTypeComponent } from './Componentes/select-user-type/select-user-type.component';
import { NotesWidgetComponent } from './Componentes/notes-widget/notes-widget.component';
import { StatisticsComponent } from './Componentes/statistics/statistics.component';
import { HotelBookingComponent } from './Componentes/hotel-booking/hotel-booking.component';
import { FlightSearchComponent } from './Componentes/flight-search/flight-search.component';
import { TrendingComponent } from './Componentes/trending/trending.component';
import { EventListingComponent } from './Componentes/event-listing/event-listing.component';
import { ScheduleComponent } from './Componentes/schedule/schedule.component';
import { ImageSliderComponent } from './Componentes/image-slider/image-slider.component';
import { VirtualRealityComponent } from './Componentes/virtual-reality/virtual-reality.component';
import { DownloadAppComponent } from './Componentes/download-app/download-app.component';
import { PreOrderComponent } from './Componentes/pre-order/pre-order.component';
import { LoadingComponent } from './Componentes/loading/loading.component';
import { ThankYouComponent } from './Componentes/thank-you/thank-you.component';
import { PendingInvitationComponent } from './Componentes/pending-invitation/pending-invitation.component';
import { ItineraryComponent } from './Componentes/itinerary/itinerary.component';
import { DatePickerComponent } from './Componentes/date-picker/date-picker.component';
import { StatusUpdateComponent } from './Componentes/status-update/status-update.component';
import { FormComponent } from './Componentes/form/form.component';
import { ButtonComponent } from './Componentes/button/button.component';
import { BadgeComponent } from './Componentes/badge/badge.component';
import { PaginationComponent } from './Componentes/pagination/pagination.component';
import { ProgressBarComponent } from './Componentes/progress-bar/progress-bar.component';
import { TooltipComponent } from './Componentes/tooltip/tooltip.component';
import { AvatarComponent } from './Componentes/avatar/avatar.component';
import { TermsOfServiceComponent } from './Componentes/terms-of-service/terms-of-service.component';
import { CreateNewComponent } from './Componentes/create-new/create-new.component';
import { CuratedForYouComponent } from './Componentes/curated-for-you/curated-for-you.component';
import { FAQComponent } from './Componentes/f-a-q/f-a-q.component';
import { SplashScreenComponent } from './Componentes/splash-screen/splash-screen.component';
import { NewComponent } from './Componentes/new/new.component';
import { ProductTourComponent } from './Componentes/product-tour/product-tour.component';
import { CurrentlyInStockComponent } from './Componentes/currently-in-stock/currently-in-stock.component';
import { GiveawayComponent } from './Componentes/giveaway/giveaway.component';
import { AdvertisementComponent } from './Componentes/advertisement/advertisement.component';
import { CategoriesComponent } from './Componentes/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CreditCardCheckoutComponent,
    LandingPageComponent,
    CalculatorComponent,
    AppIconComponent,
    UserProfileComponent,
    SettingsComponent,
    MusicPlayerComponent,
    FourHundredFourPageComponent,
    FlashMessageComponent,
    ECommerceShopComponent,
    DirectMessagingComponent,
    CountdownTimerComponent,
    OffSwitchComponent,
    PopUpComponent,
    EmailReceiptComponent,
    AnalyticsChartComponent,
    LeaderboardComponent,
    LocationTrackerComponent,
    HomeMonitoringDashboardComponent,
    SearchComponent,
    OnboardingComponent,
    BoardingPassComponent,
    TvAppComponent,
    SubscribeComponent,
    ContactUsComponent,
    MapComponent,
    PricingComponent,
    FileComponent,
    UploadComponent,
    CrowdfundingCampaignComponent,
    CustomizeProductComponent,
    CarInterfaceComponent,
    BlogPostComponent,
    SpecialOfferComponent,
    WeatherComponent,
    CalendarComponent,
    TestimonialsComponent,
    RecipeComponent,
    WorkoutTrackerComponent,
    ToDoListComponent,
    DrinkMenuComponent,
    FavoritesComponent,
    InfoCardComponent,
    InvoiceComponent,
    ActivityFeedComponent,
    ComingSoonComponent,
    NotificationsComponent,
    JobListingComponent,
    PressPageComponent,
    LogoDesignComponent,
    HeaderNavigationComponent,
    ConfirmationComponent,
    IconSetComponent,
    BreadcrumbsComponent,
    VideoPlayerComponent,
    ShoppingCartComponent,
    BackgroundPatternComponent,
    ColorPickerComponent,
    RedeemCouponComponent,
    WorkoutOfTheDayComponent,
    BestOfTwoThousandAndFifteenComponent,
    SelectUserTypeComponent,
    NotesWidgetComponent,
    StatisticsComponent,
    HotelBookingComponent,
    FlightSearchComponent,
    TrendingComponent,
    EventListingComponent,
    ScheduleComponent,
    ImageSliderComponent,
    VirtualRealityComponent,
    DownloadAppComponent,
    PreOrderComponent,
    LoadingComponent,
    ThankYouComponent,
    PendingInvitationComponent,
    ItineraryComponent,
    DatePickerComponent,
    StatusUpdateComponent,
    FormComponent,
    ButtonComponent,
    BadgeComponent,
    PaginationComponent,
    ProgressBarComponent,
    TooltipComponent,
    AvatarComponent,
    TermsOfServiceComponent,
    CreateNewComponent,
    CuratedForYouComponent,
    FAQComponent,
    SplashScreenComponent,
    NewComponent,
    ProductTourComponent,
    CurrentlyInStockComponent,
    GiveawayComponent,
    AdvertisementComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
