function Business(
  companyName,
  email,
  logoUrl,
  linkedInUrl,
  websiteUrl,
  address,
  location
) {
  this.company_name = companyName;
  this.email = email;
  this.logo_url = logoUrl;
  this.linkedIn_url = linkedInUrl;
  this.website_url = websiteUrl;
  this.address = address;
  this.location = location;
}

module.exports = Business;
