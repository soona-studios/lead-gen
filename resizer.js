
const networks = [{
  name: 'Amazon',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2e7bf287ad990614c_amazon-color-icon.webp'
}, {
  name: 'Shopify',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad276b860e90dda2da7_shopify-color-icon.webp'
}, {
  name: 'Instagram',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad216e3419cb15f39d7_instagram-color-icon.webp'
}, {
  name: 'Facebook',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad27edeb6ff32aab206_facebook-color-icon.webp'
}, {
  name: 'YouTube',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2f3b2bad085b7392f_youtube-color-icon.webp'
}, {
  name: 'Pinterest',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2cf1b78ebc5a6cc8a_pintrest-color-icon.webp'
}, {
  name: 'Linkedin',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2074182433c410360_linkedin-color-icon.webp'
}, {
  name: 'Twitter',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad245bc453b24d9b914_twitter-color-icon.webp'
}];
const facebookSizes = [{
  name: 'profile image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6483a070880329669f76c8fa_profile-photo.webp',
  size: {
    width: 180,
    height: 180
  }
}, {
  name: 'cover',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f24ff5f86872f55fda_facebook-cover.webp',
  size: {
    width: 820,
    height: 312,
  }
}, {
  name: 'shared image (timeline)',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f285cc4e4093e5f17a_facebook-link.webp',
  size: {
    width: 1200,
    height: 630,
  }
}, {
  name: 'post image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f2c0eb718745ca00d7_facebook-highlighted.webp',
  size: {
    width: 1200,
    height: 630,
  }
}, {
  name: 'link image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f285cc4e4093e5f17a_facebook-link.webp',
  size: {
    width: 1200,
    height: 630,
  }
}, {
  name: 'highlighted image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f2c0eb718745ca00d7_facebook-highlighted.webp',
  size: {
    width: 1200,
    height: 717,
  }
}, {
  name: 'event image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f16793543394b446c0_facebook-event.webp',
  size: {
    width: 1920,
    height: 1080,
  }
}, {
  name: 'group cover photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f16793543394b446c0_facebook-event.webp',
  size: {
    width: 1640,
    height: 856,
  }
}, {
  name: 'facebook stories',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f285cc4e4093e5f19c_facebook-stories.webp',
  size: {
    width: 1080,
    height: 1920,
  }
}];
const instagramSizes = [{
  name: 'profile photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f9128e3bbd5cb9fb00_instagram-profile.webp',
  size: {
    width: 110,
    height: 110,
  }
}, {
  name: 'square photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f9affe8639ac4ba53f_instagram-square.webp',
  size: {
    width: 1080,
    height: 1080,
  }
}, {
  name: 'landscape photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f9a60c0193ecb02818_instagram-landscape.webp',
  size: {
    width: 1080,
    height: 608,
  }
}, {
  name: 'vertical photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f9d6b2bf502cd34ba0_instagram-verticle.webp',
  size: {
    width: 1080,
    height: 1350,
  }
}, {
  name: 'instagram story + IGTV',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1f9725d444774eba700_instagram-stories.webp',
  size: {
    width: 1080,
    height: 1980,
  }
}];
const twitterSizes = [{
  name: 'profile photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fee23d495cb6720c36_twitter-profile.webp',
  size: {
    width: 400,
    height: 400,
  }
}, {
  name: 'header photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1feaffe8639ac4bab8a_twitter-cover.webp',
  size: {
    width: 1500,
    height: 500,
  }
}, {
  name: 'shared link',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fe0bd0f43471a7556f_twitter-shared.webp',
  size: {
    width: 1200,
    height: 628,
  }
}, {
  name: 'single image tweet',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fe6793543394b466db_twitter-single-image.webp',
  size: {
    width: 1200,
    height: 675,
  }
}, {
  name: 'two image tweet (7:8)',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fedf27815cb61599ed_twitter-2-image.webp',
  size: {
    width: 700,
    height: 800,
  }
}, {
  name: 'three image tweet: left image (7:8)',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fec0eb718745ca11ed_twitter-3-image-left.webp',
  size: {
    width: 700,
    height: 800,
  }
}, {
  name: 'three image tweet: right images (7:4)',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fe7f8c3251d5575fc2_twitter-3-image-right.webp',
  size: {
    width: 1200,
    height: 686,
  }
}, {
  name: 'four image tweet (2:1)',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/6499f1fe4c2fdf9a4e0c12f1_twitter-4-image.webp',
  size: {
    width: 1200,
    height: 600,
  }
}];
const linkedinSizes = [{
  name: 'personal profile photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a057d77ff3281b20403_linkedin-profile.png',
  size: {
    width: 400,
    height: 400,
  }
}, {
  name: 'personal profile banner',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a044c3f26ff0f7c78b4_linkedin-profile-banner.webp',
  size: {
    width: 1584,
    height: 396,
  }
}, {
  name: 'company logo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a059d6734740b5370b2_linkedin-company-logo.png',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: 'company page cover',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a05f3f3dd4e4edb9eaf_linkedin-company-banner.webp',
  size: {
    width: 1536,
    height: 768,
  }
}, {
  name: 'company main image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a04325217574196e986_linkedin-company-main-image.webp',
  size: {
    width: 1128,
    height: 376,
  }
}, {
  name: 'company photos',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a04325217574196e989_linkedin-company-images.webp',
  size: {
    width: 900,
    height: 600,
  }
}, {
  name: 'shared image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a0565944c1757f2468c_linkedin-shared-image.webp',
  size: {
    width: 1200,
    height: 1200,
  }
}, {
  name: 'shared link',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649b1a05a05a0cac918c37b1_linkedin-shared-link.webp',
  size: {
    width: 1200,
    height: 627,
  }
}];
const pinterestSizes = [{
  name: 'profile image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c68222ace105338b50e7e_pinterest-profile.webp',
  size: {
    width: 165,
    height: 165,
  }
}, {
  name: 'square pins',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c6822965edf4b48a12e3a_pinterest-square-pin.webp',
  size: {
    width: 1000,
    height: 1000,
  }
}, {
  name: 'optimal pins',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c68222ace105338b50e50_pinterest-optimal-pin.webp',
  size: {
    width: 1000,
    height: 1500,
  }
}, {
  name: 'long pins',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c682292c9555396e583de_pinterest-long-pin.webp',
  size: {
    width: 1000,
    height: 2100,
  }
}, {
  name: 'infographic pins',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c6822965edf4b48a12e26_pinterest-infographic-pin.webp',
  size: {
    width: 1000,
    height: 3000,
  }
}, {
  name: 'board cover',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c6822e53d101ee21b73ab_pinterest-board-cover.webp',
  size: {
    width: 800,
    height: 800,
  }
}];
const youtubeSizes = [{
  name: 'channel icon',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c7015ce2580b82617ebcf_youtube-channel-icon.webp',
  size: {
    width: 800,
    height: 800,
  },
}, {
  name: 'channel art',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c701452b6c71e3b958530_youtube-channel-art.webp',
  size: {
    width: 2560,
    height: 1440,
  }
}, {
  name: 'video thumbnail',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c701565d29c6497a81ddf_youtube-video-thumbnail.webp',
  size: {
    width: 1280,
    height: 720,
  }
}];
const shopifySizes = [{
  name: 'logo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694bbc91fd908d701eb4_shopify-logo.png',
  size: {
    width: 200,
    height: 200,
  }
}, {
  name: 'square',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b2ace105338b607e5_shopify-square-product-page.png',
  size: {
    width: 2048,
    height: 2048,
  }
}, {
  name: 'small slideshow',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b307c55f8c2730d2f_shopify-small-slideshow.webp',
  size: {
    width: 1200,
    height: 400,
  }
}, {
  name: 'large slideshow',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b925a6e93247dc745_shopify-large-slideshow.webp',
  size: {
    width: 2000,
    height: 600,
  }
}, {
  name: 'wide slideshow',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b65d29c64979dcf19_shopify-wide-slideshow.png',
  size: {
    width: 2000,
    height: 400,
  }
}, {
  name: 'long slideshow',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694bad507d5d38966b2a_shopify-long-slideshow.webp',
  size: {
    width: 1200,
    height: 600,
  }
}, {
  name: 'collection',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694bf0e9980166f01393_shopify-collection-image.webp',
  size: {
    width: 1024,
    height: 1024,
  }
}, {
  name: 'banner',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694be53d101ee21ca546_shopify-banner.webp',
  size: {
    width: 2800,
    height: 1000,
  }
}, {
  name: 'background',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b4cfe15c75a5c4167_shopify-background.webp',
  size: {
    width: 1920,
    height: 1080,
  }
}, {
  name: 'featured blog',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694b4cfe15c75a5c418c_shopify-featured-blog.png',
  size: {
    width: 1800,
    height: 1000,
  }
}, {
  name: 'blog content',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c694bcd465694fd84968d_shopify-blog-content.png',
  size: {
    width: 1000,
    height: 350,
  }
}];
const amazonSizes = [{
  name: 'logo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d95f05a2c9988abfb_amazon-logo.webp',
  size: {
    width: 400,
    height: 400,
  }
}, {
  name: 'product photo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d81058e497db49398_amazon-product-photo.webp',
  size: {
    width: 2000,
    height: 2000,
  }
}, {
  name: 'standard logo',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660dd47800655a32bffa_amazon-standard-logo.webp',
  size: {
    width: 600,
    height: 180,
  }
}, {
  name: 'single image + text',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d62b13931ebec8d78_amazon-single-text.webp',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: 'image + specs',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660ceb076fc18218698e_amazon-image-highlights.webp',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: '4 images + text',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d7c27d41fdf21d8bc_amazon-4-images-text.webp',
  size: {
    width: 220,
    height: 220,
  }
}, {
  name: '3 images + text',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660dca8dcee4609f0066_amazon-3-images-text.webp',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: '4 images + text grid',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660dd2a1a2eb45ee15ec_amazon-4-images-text-grid.webp',
  size: {
    width: 135,
    height: 135,
  }
}, {
  name: 'header image + text',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660ce0f240c274253439_amazon-header-text.webp',
  size: {
    width: 970,
    height: 600,
  }
}, {
  name: 'comparison chart',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660c8776fe733403562a_amazon-comparison.webp',
  size: {
    width: 150,
    height: 300,
  }
}, {
  name: 'single image + sidebar',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d46715848c693d725_amazon-single-image-sidebar.webp',
  size: {
    width: 300,
    height: 400,
  }
}, {
  name: 'sidebar image',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660f87066376060821d4_amazon-sidebar.webp',
  size: {
    width: 350,
    height: 175,
  }
}, {
  name: 'image + overlay',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660c53ebccbbf7fe0e9a_amazon-image-overaly.webp',
  size: {
    width: 970,
    height: 300,
  }
}, {
  name: 'multiple image module',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660d6ab492158a3b8187_amazon-multiple-image-module.webp',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: 'image + highlights',
  thumb: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/649c660ceb076fc18218698e_amazon-image-highlights.webp',
  size: {
    width: 300,
    height: 300,
  }
}];
const subscribeServiceURL = 'https://falcon.soona.co';
const reader = new FileReader();
const selectedNetworks = [];
const selectedImageSizes = [];
const flowBtnType = (window.screen.width < '720') * 1;

let selectedImageIndex = 0,
  selectedNetworkIndex = 0,
  croppedImages = {},
  activeStep = 1,
  lastStep = 0,
  zip = null,
  downloadExample = null,
  customSizeBtn = null,
  emailBtn = null,
  fileField = null,
  cropperTitle = null,
  downloadsList = null,
  nextCropBtn = null,
  prevStepBtns = null,
  nextStepBtns = null,
  cropperArea = null,
  canvas = null,
  cropper = null,
  dataUri = '';

const startOver = (e) => {
  e.preventDefault();
  if (cropper) cropper.destroy();

  customSizeBtn.classList.remove('w--redirected-checked');
  canvas.style.display = 'block';
  toggleNavigation('steps');
  croppedImages = {};

  activeStep = 1;
  fileField.value = '';
  document.querySelectorAll('input[type=checkbox]').forEach(field => {
    if (!field.checked) return;

    field.checked = false;
    field.previousElementSibling.classList.remove('w--redirected-checked');
  });

  document.getElementById('resizer-ad').style.display = 'none';

  selectedNetworks.splice(0, selectedNetworks.length);
  selectedImageSizes.splice(0, selectedImageSizes.length);
  selectedNetworkIndex = 0;
  selectedImageIndex = 0;
  showActiveStep();
};
const toId = value => value.replace(/\s+/g, '-').replace(/[\(|\)|\+|:]/g, '').toLowerCase();
const sizeOf = (bytes) => {
  if (bytes == 0) { return "0.00 B"; }
  let convertedSize = Math.floor(Math.log(bytes) / Math.log(1024));

  return (bytes / Math.pow(1024, convertedSize)).toFixed(2) + ' ' + ' KMGTP'.charAt(convertedSize) + 'B';
}
const getSocialMediaSizeInfo = sizeData => {
  if (typeof sizeData == 'undefined') return;
  if (sizeData == 'custom') return getCustomSize();

  const [socialMediaName, ...socialMediaImageType] = sizeData.split(':');
  const socialMediaSizes = eval(`${socialMediaName.toLowerCase()}Sizes`);

  return socialMediaSizes.filter(imageSize => imageSize.name == socialMediaImageType.join(':')).pop();
};
const validateImageIndex = () => {
  if (selectedImageIndex < 0) selectedImageIndex = 0;
  if (selectedImageIndex > selectedImageSizes.length) selectedImageIndex = selectedImageSizes.length;
}
const isNextStep = element => element.id == 'next-step' || element.parentElement.id == 'next-step';
const isNextCrop = element => element.id == 'next-crop' || element.parentElement.id == 'next-crop';
const isButtonDisabled = element => element.classList.contains('disabled') || element.parentElement.classList.contains('disabled');
const isValidEmail = email => !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const isLastSelectedNetwork = index => selectedNetworks.length - 1 == index;

const initCropper = () => {
  if (cropper) cropper.destroy();

  cropper = new Cropper(canvas, {
    viewMode: 3,
    minContainerWidth: canvas.offsetWidth,
    minContainerHeight: canvas.offsetHeight,
    dragMode: 'none',
    autoCrop: false,
    background: false,
    zoomable: false,
    preview: '#crop-preview',
    ready: () => {
      updateCropper();
      updateCropButtons();
    }
  });
}
const toggleCropper = on => {
  switch (activeStep){
    case 2:
    case 3:
      if(cropper) {
        cropper.destroy();
        canvas.style.display = 'block';
      }
      cropperArea.querySelector('.soona-resizer_crop-tools-wrap').style.display = 'block';
      cropperArea.querySelector('.soona-resizer_lottie').style.display = 'none';
      cropperArea.querySelector('.soona-resizer_marketing-ad').style.display = 'none';
      break;
    case 6:
      cropperArea.querySelector('.soona-resizer_crop-tools-wrap').style.display = 'none';
      cropperArea.querySelector('.soona-resizer_lottie').style.display = 'block';
      cropperArea.querySelector('.soona-resizer_marketing-ad').style.display = 'none';
      break;
    case 7:
      cropperArea.querySelector('.soona-resizer_crop-tools-wrap').style.display = 'none';
      cropperArea.querySelector('.soona-resizer_lottie').style.display = 'none';
      cropperArea.querySelector('.soona-resizer_marketing-ad').style.display = 'block';
      break;
    default:
      cropperArea.querySelector('.soona-resizer_crop-tools-wrap').style.display = 'block';
      cropperArea.querySelector('.soona-resizer_lottie').style.display = 'none';
      cropperArea.querySelector('.soona-resizer_marketing-ad').style.display = 'none';
      break;
  }

  cropperArea.style.display = on ? 'flex' : 'none';
}
const getCustomSize = () => {
  const height = document.getElementById('height-2');
  const width = document.getElementById('width-2');

  return { name: 'select your size', size: { height: height.value, width: width.value } };
};

const addImage = image => selectedImageSizes.push(image);
const removeImage = image => selectedImageSizes.splice(selectedImageSizes.indexOf(image), 1);
const toggleNavigation = (type) => {
  const selector = `#${type}-control.${flowBtnType ? 'is-sticky-bar' : 'hide-on-mobile'}`;

  document.querySelectorAll('.soona-resizer_form-navigation').forEach(el => el.classList.remove('active'));

  document.querySelectorAll('#crop-control').forEach(el => el.style.display = type == 'crop' ? 'flex' : 'none');
  document.querySelectorAll('#steps-control').forEach(el => el.style.display = type == 'steps' ? 'flex' : 'none');

  if(document.querySelector(selector))
    document.querySelector(selector).classList.add('active');
}

const updateCropper = () => {
  if (selectedImageSizes.length == selectedImageIndex) return;
  if (!selectedImageSizes.length) {
    cropper.clear();
    return;
  }

  const network = selectedImageSizes[selectedImageIndex].split(':')[0];
  const wantedSize = getSocialMediaSizeInfo(selectedImageSizes[selectedImageIndex]);
  updateCropperPreview(wantedSize.size);

  if (wantedSize.size.height && wantedSize.size.width) {
    const aspectRatio = wantedSize.size.width / wantedSize.size.height
    
    cropper.crop().setAspectRatio(aspectRatio).setCropBoxData(wantedSize.size);
  } else {
    cropper.crop().setAspectRatio(null).setCropBoxData({ height: 200, width: 200 }); // not locked to aspect-ratio
  }

  updateCropperInfo(network, wantedSize);
};
const updateNetworkNavButtons = () => {
  const nextButton = document
                       .querySelector('.soona-resizer_form-navigation.active')
                       .querySelector('.soona-resizer_next-button');

  if (selectedNetworks.length) nextButton.classList.remove('disabled');
  else nextButton.classList.add('disabled')
};
const updateImageNavButtons = (currentNetwork) => {
  const nextButton = document
                       .querySelector('.soona-resizer_form-navigation.active')
                       .querySelector('.soona-resizer_next-button');

  let checked = false;
  document
    .querySelectorAll(`.${currentNetwork}-size`)
    .forEach(el => {
      if (el.querySelector('input').checked) checked = true;
    });

  if (checked) nextButton.classList.remove('disabled');
  else nextButton.classList.add('disabled');
};
const updateCropperPreview = ({width, height}) => {
  if (!width || !height) {
    document.querySelector('#crop-preview').style = {width: '400px', height: '300px'};
    return;
  }

  document.querySelector('#crop-preview').style = { height: `${height}px`, width: `${width}px` };
};
const updateCropperInfo = (networkName, mediaData) => {
  cropperTitle.innerHTML = `crop ${networkName} ${mediaData.name}`;
  cropperTitle.parentNode.querySelector('strong').innerHTML = mediaData.name;
  if (mediaData.size.width && mediaData.size.height) cropperTitle.parentNode.querySelector('.soona-resizer_crop-label:last-child').innerHTML = `${mediaData.size.width}px X ${mediaData.size.height}px`;
  else cropperTitle.parentNode.querySelector('.soona-resizer_crop-label:last-child').innerHTML = '';
}
const updateCropButtons = () => {
  toggleNavigation('crop');
  prevCropBtns[flowBtnType].disabled = !selectedImageSizes.length || selectedImageIndex == 0;
  nextCropBtns[flowBtnType].disabled = !selectedImageSizes.length || selectedImageIndex == selectedImageSizes.length;

  if (selectedImageIndex == selectedImageSizes.length - 1) nextCropBtns.textContent = 'download';
  else nextCropBtns.textContent = 'next';

  if (selectedImageIndex == selectedImageSizes.length) {
    selectedImageIndex = 0;
    toggleNavigation('off');
    nextStepBtns[flowBtnType].click();
  }
};
const updateSizeSelectors = () => {
  document.querySelector('#sizes-title').innerHTML = `choose sizes for ${selectedNetworks[selectedNetworkIndex]}`;
  document.querySelectorAll(`.shown`).forEach(size => size.classList.remove('shown'));
  document.querySelectorAll(`.${selectedNetworks[selectedNetworkIndex]}-size`).forEach(size => size.classList.add('shown'));

  updateImageNavButtons(selectedNetworks[selectedNetworkIndex]);
};
const showActiveStep = () => {
  if (!document.getElementById(`step-${activeStep}`)) return;

  if (activeStep == 1) document.querySelector('.soona-resizer_platforms').classList.remove('active');
  else document.querySelector('.soona-resizer_platforms').classList.add('active');

  document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
  document.getElementById(`step-${activeStep}`).classList.add('active');

  let topScroll = $('.soona-resizer_platforms').offset().top;

  if (topScroll) $("html, body").animate({ scrollTop: (topScroll - 130) }, "fast");
};
const prepareStep = () => {
  const nav = document.querySelector('.soona-resizer_form-navigation.active');
  if (nav && !document.querySelector('input[type="checkbox"]:checked') && activeStep < 4)
    nav.querySelector('.soona-resizer_next-button').classList.add('disabled');
};

const handleStepChange = event => {
  event.preventDefault();
  if (activeStep > 1 && isNextStep(event.target) && isButtonDisabled(event.target)) return;

  if (activeStep == 3 && (0 <= selectedNetworkIndex && selectedNetworkIndex < selectedNetworks.length - 1)) {
    selectedNetworkIndex += isNextStep(event.target) ? 1 : -1;
  } else {
    activeStep += (isNextStep(event.target) ? 1 : -1);
  }

  if (activeStep < 1 || activeStep > lastStep * 1) {
    activeStep = activeStep < 1 ? 1 : lastStep * 1;
    return;
  }

  const customSizeIndex = selectedNetworks.indexOf('custom');
  if (customSizeIndex != -1 && selectedNetworkIndex == customSizeIndex) {
    selectedNetworkIndex += isNextStep(event.target) ? 1 : -1;
  }

  showActiveStep();
  toggleCropper(document.querySelector(`#step-${activeStep}`).classList.contains('needs-cropper'));
  prepareStep();

  switch (activeStep) {
    case 2:
      prevStepBtns[flowBtnType].innerHTML = 'start over';
      selectedNetworkIndex = 0;
      updateNetworkNavButtons();
      break;
    case 3:
      prevStepBtns[flowBtnType].innerHTML = 'back';

      if(selectedNetworkIndex == -1) return prevStepBtns[flowBtnType].click();
      if(selectedNetworks.includes('custom') && selectedNetworkIndex == selectedNetworks.length && isLastSelectedNetwork(customSizeIndex)) {
        nextStepBtns[flowBtnType].classList.remove('disabled');
        return nextStepBtns[flowBtnType].click();
      }

      updateSizeSelectors();
      break;
    case 4:
      if(!selectedNetworks.includes('custom')) {
        selectedImageIndex = 0;
        isNextStep(event.target) ? nextStepBtns[flowBtnType].click() : setTimeout(() => prevStepBtns[flowBtnType].click(), 10);
        if(selectedImageSizes.includes('custom')) selectedImageSizes.splice(selectedImageSizes.indexOf('custom'), 1);
      } else {
        if(!selectedImageSizes.includes('custom')) selectedImageSizes.push('custom');
      }

      selectedNetworkIndex = selectedNetworks.length - (isLastSelectedNetwork(customSizeIndex) ? 2 : 1);
      break;
    case 5:
      initCropper();
      break;
    case 6:
      if(document.getElementById('email-2').value && isValidEmail(document.getElementById('email-2').value)) {
        setTimeout(() => {
          nextStepBtns[flowBtnType].click();
        }, 5);
      }
      break;
    case 7:
      document.getElementById('resizer-ad').style.display = 'grid';
      appendDownloadedFiles();
      break;
  }
};
const handleCustomSizeSelect = event => {
  if(selectedNetworks.indexOf('custom') == -1) {
    customSizeBtn.classList.add('w--redirected-checked');
    selectedNetworks.push('custom');
  } else {
    customSizeBtn.classList.remove('w--redirected-checked');
    selectedNetworks.splice(selectedNetworks.indexOf('custom'), 1);
  }

  updateNetworkNavButtons();
}
const handleZipDownload = () => {
  zip = new JSZip();
  Object.entries(croppedImages).forEach(([imageName, imageData]) => {
    const image = imageData.split(',')[1];
    zip.file(`${imageName}.jpg`, image, { base64: true });
  });
  zip.generateAsync({ type: 'blob' })
    .then(content => saveAs(content, 'resized-images.zip'));
}
const handleEmailUpdate = event => {
  if (!isValidEmail(event.target.value)) {
    emailBtn.classList.add('disabled');
    return;
  }

  emailBtn.classList.remove('disabled');

  if (event.keyCode == 13) return emailBtn.click();
}
const handleImageChange = event => {
  event.preventDefault();

  showActiveStep();
  const needsCrop = isNextCrop(event.target);

  selectedImageIndex += (needsCrop ? 1 : -1);
  if (selectedImageIndex < 0) {
    toggleNavigation('steps');
    prevStepBtns[flowBtnType].click();
    validateImageIndex();
    return;
  }
  validateImageIndex();

  if (needsCrop) handleCrop(selectedImageIndex - 1);

  if (activeStep == 5) updateCropper();
  updateCropButtons();
};
const handleCrop = imageIndex => {
  const mediaData = getSocialMediaSizeInfo(selectedImageSizes[imageIndex]);

  croppedImages[toId(selectedImageSizes[imageIndex].replace(':', '-'))] = cropper.getCroppedCanvas({
    ...mediaData.size,
    fillColor: 'gray',
  }).toDataURL('image/jpeg', 1);
};

const appendDownloadedFiles = () => {
  downloadsList.innerHTML = '';

  Object.entries(croppedImages).forEach(([fileName, fileData]) => {
    // This will append cropped files into a list with the links for downloading them
    const linkHolder = downloadExample.cloneNode(true);
    const fileSize = window.atob(fileData.split(',')[1]).length;

    linkHolder.download = fileName
    linkHolder.innerHTML = linkHolder.innerHTML.replace('{{fileName}}', `${fileName}.jpg`);
    linkHolder.innerHTML = linkHolder.innerHTML.replace('{{fileSize}}', `~${sizeOf(fileSize)}`);
    linkHolder.href = fileData;

    downloadsList.appendChild(linkHolder);
  });
};

const submitEmail = () => {
  const emailField = document.getElementById('email-2');
  if (!isValidEmail(emailField.value)) return;

  const request = new XMLHttpRequest();
  analytics.identify({
    email: emailField.value,
    Embed_Source: "Image Resizer"
  });

  request.open('POST', `${subscribeServiceURL}/api/eventing/subscribe`);
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");

  request.onload = () => {
    if([200, 204].includes(request.status)) nextStepBtns[flowBtnType].click();
  }
  request.send(JSON.stringify({
    new_lead: {
      email: emailField.value,
      lead_source: 'Image Resizer',
    }
  }));
};

const wrapDesktopNavigation = () => {
  const desktopBtns = document.querySelectorAll('.soona-resizer_form-navigation.hide-on-mobile');
  desktopBtns.forEach(el => el.remove());

  const wrapper = document.createElement('div');
  wrapper.classList.add('soona-resizer_desktop-navigation');

  desktopBtns.forEach(btn => wrapper.appendChild(btn));

  document.querySelector('.soona-resizer_platforms-item.is-platform-select').appendChild(wrapper);
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const imgEl = document.createElement('img');
  const startOverBtns = document.querySelectorAll('.upload-new-image');
  const emailField = document.getElementById('email-2');
  const zipDownloadBtn = document.getElementById('zip-download');
  
  customSizeBtn = document.getElementById('custom-button');
  emailBtn = document.getElementById('submit-email');
  fileField = form.querySelector('input[type=file]');
  cropperArea = document.getElementById('cropper-area');
  canvas = document.querySelector('canvas');
  downloadsList = document.getElementById('downloads-list');
  cropperTitle = document.getElementById('cropper-title');
  lastStep = document.querySelectorAll('.step').length;
  prevCropBtns = document.querySelectorAll('#prev-crop');
  nextCropBtns = document.querySelectorAll('#next-crop');
  prevStepBtns = document.querySelectorAll('#prev-step');
  nextStepBtns = document.querySelectorAll('#next-step');
  
  const ctx = canvas.getContext('2d');

  const networkExample = document.getElementById('network-example');
  const sizeExample = document.getElementById('size-example');
  downloadExample = document.getElementById('download-example');
  const separator = document.createElement('div');
  separator.classList.add('separator');

  networkExample.remove();
  sizeExample.remove();
  downloadExample.remove();

  wrapDesktopNavigation();
  toggleNavigation('steps');
  fillNetworks();
  showActiveStep(activeStep);

  emailField.value = '';

  form.addEventListener('submit', e => {
    e.preventDefault();
  });
  fileField.addEventListener('change', function () {
    if (fileField.value == '') { return; }
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(fileField.files[0].type)) {
      alert('Please use a valid image');
      return;
    }

    reader.readAsDataURL(fileField.files[0]);
    nextStepBtns[flowBtnType].click();
  });
  reader.addEventListener('load', () => {
    dataUri = reader.result;
    imgEl.src = dataUri;
  });
  imgEl.addEventListener('load', () => {
    if (cropper) {
      cropper.destroy();
    }

    canvas.width = imgEl.naturalWidth;
    canvas.height = imgEl.naturalHeight;
    ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
  });
  emailBtn.addEventListener('click', submitEmail);
  emailField.addEventListener('keyup', handleEmailUpdate);
  customSizeBtn.addEventListener('click', handleCustomSizeSelect);
  zipDownloadBtn.addEventListener('click', handleZipDownload);
  startOverBtns.forEach(btn => btn.addEventListener('click', startOver));
  prevCropBtns.forEach(btn => btn.addEventListener('click', handleImageChange));
  nextCropBtns.forEach(btn => btn.addEventListener('click', handleImageChange));
  prevStepBtns.forEach(btn => btn.addEventListener('click', handleStepChange));
  nextStepBtns.forEach(btn => btn.addEventListener('click', handleStepChange));

  function fillNetworks() {
    const networksContainer = document.getElementById('networks');

    networks.forEach(network => {
      const newNetwork = networkExample.cloneNode(true);
      newNetwork.id = `network-item-${network.name}`;
      newNetwork.setAttribute('for', `network-${network.name}`);
      newNetwork.innerHTML = newNetwork.innerHTML.replaceAll('{{networkName}}', network.name);
      newNetwork.querySelector('input').setAttribute('name', newNetwork.querySelector('input').dataset.name);
      newNetwork.querySelector('input').setAttribute('id', newNetwork.querySelector('input').dataset.id);
      newNetwork.querySelector('img').src = network.logo;

      networksContainer.appendChild(newNetwork);
      newNetwork.addEventListener('change', event => {
        event.target.checked ?
          selectedNetworks.push(network.name.toLowerCase()) :
          selectedNetworks.splice(selectedNetworks.indexOf(network.name.toLowerCase()), 1);

        updateNetworkNavButtons();
      });
      fillSizes(network.name.toLowerCase());
    });
  }
  function fillSizes(network) {
    const sizes = eval(`${network.toLowerCase()}Sizes`);
    if (sizes.length == 0) return;

    const sizesContainer = document.getElementById('size-options');

    sizes.forEach(size => {
      const newSize = sizeExample.cloneNode(true);
      newSize.id = `size-item-${network.toLowerCase()}-${toId(size.name)}`;
      newSize.classList.add(`${network.toLowerCase()}-size`);
      newSize.innerHTML = newSize.innerHTML.replaceAll('{{networkName}}', network.toLowerCase());
      newSize.innerHTML = newSize.innerHTML.replaceAll('{{sizeNameId}}', toId(size.name));
      newSize.innerHTML = newSize.innerHTML.replaceAll('{{sizeName}}', size.name);
      newSize.innerHTML = newSize.innerHTML.replaceAll('{{size}}', `${size.size.width}px x ${size.size.height}px`)
      newSize.querySelector('label').setAttribute('for', `${network.toLowerCase()}-${toId(size.name)}-size`);
      newSize.querySelector('input').setAttribute('name', newSize.querySelector('input').dataset.name);
      newSize.querySelector('input').setAttribute('value', newSize.querySelector('input').dataset.name);
      newSize.querySelector('input').setAttribute('id', newSize.querySelector('input').dataset.id);
      if(size.thumb) newSize.querySelector('img').setAttribute('src', size.thumb);

      sizesContainer.appendChild(newSize);
      newSize.addEventListener('change', event => {
        if (event.target.checked) addImage(event.target.value);
        else removeImage(event.target.value);

        updateImageNavButtons(network.toLowerCase());
      });
    });
  }
});
