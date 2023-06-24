
const networks = [{
  name: 'Facebook',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad27edeb6ff32aab206_facebook-color-icon.webp'
}, {
  name: 'Instagram',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad216e3419cb15f39d7_instagram-color-icon.webp'
}, {
  name: 'Twitter',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad245bc453b24d9b914_twitter-color-icon.webp'
}, {
  name: 'Linkedin',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2074182433c410360_linkedin-color-icon.webp'
}, {
  name: 'Pinterest',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2cf1b78ebc5a6cc8a_pintrest-color-icon.webp'
}, {
  name: 'YouTube',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2f3b2bad085b7392f_youtube-color-icon.webp'
}, {
  name: 'Shopify',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad276b860e90dda2da7_shopify-color-icon.webp'
}, {
  name: 'Amazon',
  logo: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/64836ad2e7bf287ad990614c_amazon-color-icon.webp'
}];
const facebookSizes = [{
  name: 'profile image',
  size: {
    width: 180,
    height: 180
  }
}, {
  name: 'cover',
  size: {
    width: 820,
    height: 312,
  }
}, {
  name: 'shared image (timeline)',
  size: {
    width: 1200,
    height: 630,
  }
}, {
  name: 'post image',
  size: {
    width: 1200,
    height: 900,
  }
}, {
  name: 'link image',
  size: {
    width: 1200,
    height: 628,
  }
}, {
  name: 'highlighted image',
  size: {
    width: 1200,
    height: 717,
  }
}, {
  name: 'event image',
  size: {
    width: 1920,
    height: 1080,
  }
}, {
  name: 'group cover photo',
  size: {
    width: 1640,
    height: 856,
  }
}, {
  name: 'facebook stories',
  size: {
    width: 1080,
    height: 1920,
  }
}];
const instagramSizes = [{
  name: 'profile photo',
  size: {
    width: 110,
    height: 110,
  }
}, {
  name: 'square photo',
  size: {
    width: 1080,
    height: 1080,
  }
}, {
  name: 'landscape photo',
  size: {
    width: 1080,
    height: 608,
  }
}, {
  name: 'vertical photo',
  size: {
    width: 1080,
    height: 1350,
  }
}, {
  name: 'instagram story + IGTV',
  size: {
    width: 1080,
    height: 1980,
  }
}];
const twitterSizes = [{
  name: 'profile photo',
  size: {
    width: 400,
    height: 400,
  }
}, {
  name: 'header photo',
  size: {
    width: 1500,
    height: 500,
  }
}, {
  name: 'shared link',
  size: {
    width: 1200,
    height: 628,
  }
}, {
  name: 'single image tweet',
  size: {
    width: 1200,
    height: 675,
  }
}, {
  name: 'two image tweet (7:8)',
  size: {
    width: 700,
    height: 800,
  }
}, {
  name: 'three image tweet: left image (7:8)',
  size: {
    width: 700,
    height: 800,
  }
}, {
  name: 'three image tweet: right images (7:4)',
  size: {
    width: 1200,
    height: 686,
  }
}, {
  name: 'four image tweet (2:1)',
  size: {
    width: 1200,
    height: 600,
  }
}];
const linkedinSizes = [{
  name: 'personal profile photo',
  size: {
    width: 400,
    height: 400,
  }
}, {
  name: 'personal profile banner',
  size: {
    width: 1584,
    height: 396,
  }
}, {
  name: 'company logo',
  size: {
    width: 300,
    height: 300,
  }
}, {
  name: 'company page cover',
  size: {
    width: 1536,
    height: 768,
  }
}, {
  name: 'company main image',
  size: {
    width: 1128,
    height: 376,
  }
}, {
  name: 'company photos',
  size: {
    width: 900,
    height: 600,
  }
}, {
  name: 'shared image',
  size: {
    width: 1200,
    height: 1200,
  }
}, {
  name: 'shared link',
  size: {
    width: 1200,
    height: 627,
  }
}];
const pinterestSizes = [{
  name: 'profile image',
  size: {
    width: 165,
    height: 165,
  }
}, {
  name: 'square pins',
  size: {
    width: 1000,
    height: 1000,
  }
}, {
  name: 'optimal pins',
  size: {
    width: 1000,
    height: 1500,
  }
}, {
  name: 'long pins',
  size: {
    width: 1000,
    height: 2100,
  }
}, {
  name: 'infographic pins',
  size: {
    width: 1000,
    height: 3000,
  }
}, {
  name: 'board cover',
  size: {
    width: 800,
    height: 800,
  }
}];
const youtubeSizes = [{
  name: 'channel icon',
  size: {
    width: 800,
    height: 800,
  },
}, {
  name: 'channel art',
  size: {
    width: 2560,
    height: 1440,
  }
}, {
  name: 'video thumbnail',
  size: {
    width: 1280,
    height: 720,
  }
}];
const shopifySizes = [{
  name: 'logo',
  size: {
    width: 200,
    height: 200,
  }
}, {
  name: 'square',
  size: {
    width: 2048,
    height: 2048,
  }
}, {
  name: 'small slideshow',
  size: {
    width: 1200,
    height: 400,
  }
}, {
  name: 'large slideshow',
  size: {
    width: 2000,
    height: 600,
  }
}, {
  name: 'wide slideshow',
  size: {
    width: 2000,
    height: 400,
  }
}, {
  name: 'long slideshow',
  size: {
    width: 1200,
    height: 600,
  }
}, {
  name: 'collection',
  size: {
    width: 1024,
    height: 1024,
  }
}, {
  name: 'banner',
  size: {
    width: 2800,
    height: 1000,
  }
}, {
  name: 'background',
  size: {
    width: 1920,
    height: 1080,
  }
}, {
  name: 'featured blog',
  size: {
    width: 1800,
    height: 1000,
  }
}, {
  name: 'blog content',
  size: {
    width: 1000,
    height: 350,
  }
}];
const amazonSizes = [{
  name: 'logo',
  size: {
    width: 200,
    height: 200,
  }
}, {
  name: 'product',
  size: {
    width: 2500,
    height: 500,
  }
}];
const subscribeServiceURL = 'https://falcon.soona.co';
const reader = new FileReader();
const selectedNetworks = [];
const selectedImageSizes = [];

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
  prevStepBtn = null,
  nextStepBtn = null,
  cropperArea = null,
  canvas = null,
  cropper = null,
  dataUri = '';

const startOver = (e) => {
  e.preventDefault();
  if (cropper) cropper.destroy();

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
const isValidEmail = email => email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const isLastSelectedNetwork = index => selectedNetworks.length - 1 == index;

const initCropper = () => {
  if (cropper) cropper.destroy();

  cropper = new Cropper(canvas, {
    viewMode: 1,
    autoCrop: false,
    background: false,
    preview: '#crop-preview'
  });
  canvas.style.display = 'none';
}
const toggleCropper = on => {
  switch (activeStep){
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

const addImage = image => selectedImageSizes.push(image);
const removeImage = image => selectedImageSizes.splice(selectedImageSizes.indexOf(image), 1);
const toggleNavigation = (type) => {
  document.querySelector('#crop-control').style.display = type == 'crop' ? 'flex' : 'none';
  document.querySelector('#steps-control').style.display = type == 'steps' ? 'flex' : 'none';
  document.querySelectorAll('.soona-resizer_form-navigation').forEach(el => el.classList.remove('active'));

  if(document.querySelector(`#${type}-control`))
    document.querySelector(`#${type}-control`).classList.add('active');
}

const updateCropper = () => {
  if (selectedImageSizes.length == selectedImageIndex) return;
  if (!selectedImageSizes.length) {
    cropper.clear();
    return;
  }

  const network = selectedImageSizes[selectedImageIndex].split(':')[0];
  const wantedSize = getSocialMediaSizeInfo(selectedImageSizes[selectedImageIndex]);
  const aspectRatio = wantedSize.size.width / wantedSize.size.height
  updateCropperPreview(wantedSize.size);

  cropper.crop().setAspectRatio(aspectRatio).setCropBoxData(wantedSize.size);

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
  document.querySelector('#crop-preview').style.height = `${height}px`;
  document.querySelector('#crop-preview').style.width = `${width}px`;
};
const updateCropperInfo = (networkName, mediaData) => {
  cropperTitle.innerHTML = `crop ${networkName} ${mediaData.name}`;
  cropperTitle.parentNode.querySelector('strong').innerHTML = mediaData.name;
  cropperTitle.parentNode.querySelector('.soona-resizer_crop-label:last-child').innerHTML = `${mediaData.size.width}px X ${mediaData.size.height}px`;
}
const updateCropButtons = () => {
  toggleNavigation('crop');
  prevCropBtn.disabled = !selectedImageSizes.length || selectedImageIndex == 0;
  nextCropBtn.disabled = !selectedImageSizes.length || selectedImageIndex == selectedImageSizes.length;

  if (selectedImageIndex == selectedImageSizes.length - 1) nextCropBtn.textContent = 'download';
  else nextCropBtn.textContent = 'next';

  if (selectedImageIndex == selectedImageSizes.length) {
    selectedImageIndex = 0;
    toggleNavigation('off');
    nextStepBtn.click();
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
  if (nav && !document.querySelector('input[type="checkbox"]:checked'))
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
      prevStepBtn.innerHTML = 'start over';
      selectedNetworkIndex = 0;
      updateNetworkNavButtons();
      break;
    case 3:
      prevStepBtn.innerHTML = 'back';

      if(selectedNetworkIndex == -1) return prevStepBtn.click();
      if(selectedNetworks.includes('custom') && selectedNetworkIndex == selectedNetworks.length && isLastSelectedNetwork(customSizeIndex)) return nextStepBtn.click();

      updateSizeSelectors();
      break;
    case 4:
      if(!selectedNetworks.includes('custom')) {
        selectedImageIndex = 0;
        isNextStep(event.target) ? nextStepBtn.click() : setTimeout(() => prevStepBtn.click(), 10);
      }
      selectedNetworkIndex = selectedNetworks.length - isLastSelectedNetwork(customSizeIndex) ? 3 : 2;
      break;
    case 5:
      initCropper();
      setTimeout(() => {
        updateCropper();
        updateCropButtons();
      }, 50);
      break;
    case 7:
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
}
const handleImageChange = event => {
  event.preventDefault();

  const needsCrop = isNextCrop(event.target);

  selectedImageIndex += (needsCrop ? 1 : -1);
  if (selectedImageIndex < 0) {
    toggleNavigation('steps');
    prevStepBtn.click();
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
  request.open('POST', `${subscribeServiceURL}/api/eventing/subscribe`);
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");

  request.onload = () => {
    if(request.status == 200) nextStepBtn.click();
  }
  request.send(JSON.stringify({
    email: emailField.value,
  }));
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
  prevCropBtn = document.getElementById('prev-crop');
  nextCropBtn = document.getElementById('next-crop');
  prevStepBtn = document.getElementById('prev-step');
  nextStepBtn = document.getElementById('next-step');
  
  const ctx = canvas.getContext('2d');
  
  const networkExample = document.getElementById('network-example');
  const sizeExample = document.getElementById('size-example');
  downloadExample = document.getElementById('download-example');
  const separator = document.createElement('div');
  separator.classList.add('separator');

  networkExample.remove();
  sizeExample.remove();
  downloadExample.remove();

  toggleNavigation('steps');
  fillNetworks();
  showActiveStep(activeStep);

  form.addEventListener('submit', e => {
    e.preventDefault();
  });
  fileField.addEventListener('change', function () {
    if (fileField.value == '') {
      console.log('no file selected');
      return;
    }

    reader.readAsDataURL(fileField.files[0]);
    nextStepBtn.click();
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
  prevCropBtn.addEventListener('click', handleImageChange);
  nextCropBtn.addEventListener('click', handleImageChange);
  prevStepBtn.addEventListener('click', handleStepChange);
  nextStepBtn.addEventListener('click', handleStepChange);

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

      sizesContainer.appendChild(newSize);
      newSize.addEventListener('change', event => {
        if (event.target.checked) addImage(event.target.value);
        else removeImage(event.target.value);

        updateImageNavButtons(network.toLowerCase());
      });
    });
  }
});
