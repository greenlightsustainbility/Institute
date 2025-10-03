import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

import HomePage from './pages/home';
import AboutPage from './pages/about';
import LearnerDashboard from './pages/learner-dashboard';
import Login from './pages/login';
import UserRegistration from './pages/user-registration';
import OrganizationDashboard from './pages/organization-dashboard';
import CoursePlayer from './pages/course-player';
import CourseListingPage from './pages/course-listing';
import CourseDetail from './pages/course-detail';
import PricingPage from './pages/pricing-page';
import ContactPage from './pages/contact-page';
import CertificateVerification from './pages/certificate-verification';
import CheckoutFlow from './pages/checkout-flow';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/user-registration" element={<UserRegistration />} />

          {/* Dashboards */}
          <Route path="/learner-dashboard" element={<LearnerDashboard />} />
          <Route path="/organization-dashboard" element={<OrganizationDashboard />} />

          {/* Courses */}
          <Route path="/course-player" element={<CoursePlayer />} />
          <Route path="/courses" element={<CourseListingPage />} />
          <Route path="/course-listing" element={<CourseListingPage />} />
          <Route path="/course-detail" element={<CourseDetail />} />

          {/* Pages */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/certificate-verification" element={<CertificateVerification />} />
          <Route path="/verify" element={<CertificateVerification />} />
          <Route path="/checkout-flow" element={<CheckoutFlow />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
