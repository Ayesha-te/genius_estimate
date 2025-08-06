// SEO Audit Script for Genius Estimate
// Run this script to check SEO implementation

import fs from 'fs';
import path from 'path';

class SEOAuditor {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
  }

  // Check if file exists
  checkFileExists(filePath, description) {
    if (fs.existsSync(filePath)) {
      this.results.passed.push(`✅ ${description}: Found`);
      return true;
    } else {
      this.results.failed.push(`❌ ${description}: Missing`);
      return false;
    }
  }

  // Check file content for specific patterns
  checkFileContent(filePath, pattern, description) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(pattern)) {
        this.results.passed.push(`✅ ${description}: Found`);
        return true;
      } else {
        this.results.failed.push(`❌ ${description}: Missing`);
        return false;
      }
    } else {
      this.results.failed.push(`❌ ${description}: File not found`);
      return false;
    }
  }

  // Check for placeholder values that need to be replaced
  checkPlaceholders(filePath, placeholders, description) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const foundPlaceholders = placeholders.filter(placeholder => content.includes(placeholder));
      
      if (foundPlaceholders.length > 0) {
        this.results.warnings.push(`⚠️ ${description}: Replace placeholders: ${foundPlaceholders.join(', ')}`);
        return false;
      } else {
        this.results.passed.push(`✅ ${description}: No placeholders found`);
        return true;
      }
    }
    return false;
  }

  // Run comprehensive SEO audit
  runAudit() {
    console.log('🔍 Starting SEO Audit for Genius Estimate...\n');

    // Check essential SEO files
    this.checkFileExists('public/robots.txt', 'Robots.txt file');
    this.checkFileExists('public/sitemap.xml', 'XML Sitemap');
    this.checkFileExists('public/.htaccess', 'Apache .htaccess file');
    this.checkFileExists('public/google-business-profile.json', 'Google Business Profile JSON');
    this.checkFileExists('src/utils/seoConfig.js', 'SEO Configuration file');

    // Check main HTML file for SEO elements
    const indexPath = 'index.html';
    this.checkFileContent(indexPath, '<title>', 'HTML Title tag');
    this.checkFileContent(indexPath, 'meta name="description"', 'Meta description');
    this.checkFileContent(indexPath, 'meta name="keywords"', 'Meta keywords');
    this.checkFileContent(indexPath, 'link rel="canonical"', 'Canonical URL');
    this.checkFileContent(indexPath, 'property="og:', 'Open Graph tags');
    this.checkFileContent(indexPath, 'name="twitter:', 'Twitter Card tags');
    this.checkFileContent(indexPath, 'application/ld+json', 'Schema.org structured data');

    // Check for Google Analytics and Search Console
    this.checkFileContent(indexPath, 'google-site-verification', 'Google Search Console verification');
    this.checkFileContent(indexPath, 'googletagmanager.com/gtag/js', 'Google Analytics');

    // Check Home page SEO
    const homePath = 'src/pages/Home.tsx';
    this.checkFileContent(homePath, '<Helmet>', 'React Helmet for SEO');
    this.checkFileContent(homePath, 'meta name="description"', 'Home page meta description');

    // Check Reviews page SEO
    const reviewsPath = 'src/pages/Reviews.jsx';
    this.checkFileContent(reviewsPath, 'reviewsJsonLd', 'Reviews structured data');

    // Check for placeholders that need to be replaced
    const placeholders = [
      'your-google-search-console-verification-code',
      'your-bing-verification-code', 
      'GA_MEASUREMENT_ID',
      'your-facebook-app-id'
    ];
    this.checkPlaceholders(indexPath, placeholders, 'Placeholder values in index.html');

    // Check sitemap content
    this.checkFileContent('public/sitemap.xml', 'https://geniusestimate.com', 'Sitemap URLs');
    this.checkFileContent('public/sitemap.xml', '<lastmod>', 'Sitemap last modified dates');

    // Check robots.txt content
    this.checkFileContent('public/robots.txt', 'Sitemap:', 'Sitemap reference in robots.txt');
    this.checkFileContent('public/robots.txt', 'User-agent: *', 'User-agent directive in robots.txt');

    this.displayResults();
  }

  // Display audit results
  displayResults() {
    console.log('\n📊 SEO AUDIT RESULTS\n');
    console.log('='.repeat(50));

    if (this.results.passed.length > 0) {
      console.log('\n✅ PASSED CHECKS:');
      this.results.passed.forEach(item => console.log(item));
    }

    if (this.results.warnings.length > 0) {
      console.log('\n⚠️ WARNINGS (Action Required):');
      this.results.warnings.forEach(item => console.log(item));
    }

    if (this.results.failed.length > 0) {
      console.log('\n❌ FAILED CHECKS:');
      this.results.failed.forEach(item => console.log(item));
    }

    // Summary
    const total = this.results.passed.length + this.results.failed.length + this.results.warnings.length;
    const score = Math.round((this.results.passed.length / total) * 100);

    console.log('\n📈 SUMMARY:');
    console.log('='.repeat(30));
    console.log(`Total Checks: ${total}`);
    console.log(`Passed: ${this.results.passed.length}`);
    console.log(`Warnings: ${this.results.warnings.length}`);
    console.log(`Failed: ${this.results.failed.length}`);
    console.log(`SEO Score: ${score}%`);

    if (score >= 90) {
      console.log('\n🎉 Excellent! Your SEO implementation is nearly complete.');
    } else if (score >= 70) {
      console.log('\n👍 Good progress! Address the warnings and failed checks.');
    } else {
      console.log('\n⚠️ More work needed. Please address the failed checks.');
    }

    console.log('\n📋 NEXT STEPS:');
    console.log('1. Replace all placeholder values with actual codes');
    console.log('2. Set up Google Search Console and submit sitemap');
    console.log('3. Set up Google Analytics');
    console.log('4. Create and upload social media images');
    console.log('5. Monitor results and make adjustments');
    console.log('\nFor detailed instructions, see SEO_IMPLEMENTATION_GUIDE.md');
  }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.runAudit();