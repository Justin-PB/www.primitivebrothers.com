/**
 * Copies the specified text to the clipboard and changes the button appearance.
 * 
 * @param {string} text - The text to be copied to the clipboard.
 * @param {string} buttonId - The id of the button being clicked.
 */
function copyToClipboard(text, buttonId) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
            const button = document.getElementById(buttonId);
            button.textContent = 'Copied!';
            button.disabled = true;
            button.classList.add('copied');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

/**
 * Smoothly scrolls the window to the top of the page.
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Calculates the remaining time until midnight UTC.
 * @returns {Object} An object containing the hours, minutes, and seconds until reset.
 */
function calculateTimeUntilReset() {
    const now = new Date();
    const currentUTC = new Date(now.toISOString());
    const resetTimeUTC = new Date(currentUTC);

    resetTimeUTC.setUTCHours(0, 0, 0, 0);

    if (currentUTC.getUTCHours() >= 0 && currentUTC.getUTCHours() < 24) {
        resetTimeUTC.setUTCDate(currentUTC.getUTCDate() + 1);
    }

    const diff = resetTimeUTC - currentUTC;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

/**
 * Updates the countdown timer.
 */
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const time = calculateTimeUntilReset();
    countdownElement.innerText = `Time until reset: ${time.hours}h ${time.minutes}m ${time.seconds}s`;
}

// Update the countdown timer every second
setInterval(updateCountdown, 1000);
updateCountdown();

    document.getElementById('share-link').addEventListener('click', function() {
        // Create a textarea element to hold the text to copy
        var textarea = document.createElement('textarea');
        textarea.value = "Explore www.primitivebrothers.com for coupons, tips, tricks and strategy guides!";
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text to the clipboard
        document.execCommand('copy');

        // Remove the textarea
        document.body.removeChild(textarea);

        // Optionally, provide feedback to the user
        alert('Copied to clipboard: "Explore www.primitivebrothers.com for coupons, tips, tricks and strategy guides!" Do not spam in chat, only share when someone says they are new or they are asking for advice.');
    });
	

    document.addEventListener("DOMContentLoaded", function() {
        // Populating dropdowns for both calculators
        const currentLevelSelect1 = document.getElementById("currentLevel1");
        const desiredLevelSelect1 = document.getElementById("desiredLevel1");
        const currentLevelSelect2 = document.getElementById("currentLevel2");
        const desiredLevelSelect2 = document.getElementById("desiredLevel2");

        for (let i = 0; i <= 300; i++) {
            let option1 = new Option(i, i);
            let option2 = new Option(i, i);
            currentLevelSelect1.add(option1);
            desiredLevelSelect1.add(option2);
            currentLevelSelect2.add(option1.cloneNode(true));
            desiredLevelSelect2.add(option2.cloneNode(true));
        }
    // Set default values
    currentLevelSelect1.selectedIndex = 1;  // Select '1' for current level
    desiredLevelSelect1.selectedIndex = 186;  // Select '186' for desired level
    currentLevelSelect2.selectedIndex = 1;  // Select '1' for current level
    desiredLevelSelect2.selectedIndex = 186;  // Select '186' for desired level
    });

    // First calculator - Item Requirements (from the original code)
    const levelRequirements1 = {
        1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 3, 9: 3, 10: 3,
        11: 4, 12: 5, 13: 7, 14: 10, 15: 10, 16: 10, 17: 10, 18: 10,
        19: 10, 20: 10, 21: 10, 22: 10, 23: 10, 24: 10, 25: 10, 26: 10,
        27: 10, 28: 10, 29: 10, 30: 10, 31: 10, 32: 10, 33: 10, 34: 10,
        35: 10, 36: 10, 37: 10, 38: 10, 39: 10, 40: 10, 41: 10, 42: 10,
        43: 10, 44: 10, 45: 10, 46: 10, 47: 10, 48: 10, 49: 10, 50: 10,
        51: 20, 52: 20, 53: 20, 54: 20, 55: 20, 56: 20, 57: 20, 58: 20,
        59: 20, 60: 20, 61: 20, 62: 20, 63: 20, 64: 20, 65: 20, 66: 20,
        67: 20, 68: 20, 69: 20, 70: 20, 71: 20, 72: 20, 73: 20, 74: 20,
        75: 20, 76: 20, 77: 20, 78: 20, 79: 20, 80: 20, 81: 20, 82: 20,
        83: 20, 84: 20, 85: 20, 86: 20, 87: 20, 88: 20, 89: 20, 90: 20,
        91: 20, 92: 20, 93: 20, 94: 20, 95: 20, 96: 20, 97: 20, 98: 20,
        99: 20, 100: 20, 101: 33, 102: 33, 103: 33, 104: 33, 105: 33,
        106: 33, 107: 33, 108: 33, 109: 33, 110: 33, 111: 33, 112: 33,
        113: 33, 114: 33, 115: 33, 116: 33, 117: 33, 118: 33, 119: 33,
        120: 33, 121: 33, 122: 33, 123: 33, 124: 33, 125: 33, 126: 33,
        127: 33, 128: 33, 129: 33, 130: 33, 131: 33, 132: 33, 133: 33,
        134: 33, 135: 33, 136: 33, 137: 33, 138: 33, 139: 33, 140: 33,
        141: 33, 142: 33, 143: 33, 144: 33, 145: 33, 146: 33, 147: 33,
        148: 33, 149: 33, 150: 33, 151: 20, 152: 33, 153: 33, 154: 33,
        155: 33, 156: 33, 157: 33, 158: 33, 159: 33, 160: 33, 161: 33,
        162: 33, 163: 33, 164: 33, 165: 33, 166: 33, 167: 33, 168: 33,
        169: 33, 170: 33, 171: 33, 172: 33, 173: 33, 174: 33, 175: 33,
        176: 33, 177: 33, 178: 33, 179: 33, 180: 33, 181: 33, 182: 33,
        183: 33, 184: 33, 185: 33, 186: 33, 187: 33, 188: 33, 189: 33,
        190: 33, 191: 33, 192: 33, 193: 33, 194: 33, 195: 33, 196: 33,
        197: 33, 198: 33, 199: 33, 200: 33, 201: 50, 202: 50, 203: 50,
        204: 50, 205: 50, 206: 50, 207: 50, 208: 50, 209: 50, 210: 50,
        211: 50, 212: 50, 213: 50, 214: 50, 215: 50, 216: 50, 217: 50,
        218: 50, 219: 50, 220: 50, 221: 50, 222: 50, 223: 50, 224: 50,
        225: 50, 226: 50, 227: 50, 228: 50, 229: 50, 230: 50, 231: 50,
        232: 50, 233: 50, 234: 50, 235: 50, 236: 50, 237: 50, 238: 50,
        239: 50, 240: 50, 241: 50, 242: 50, 243: 50, 244: 50, 245: 50,
        246: 50, 247: 50, 248: 50, 249: 50, 250: 50, 251: 100, 252: 100,
        253: 100, 254: 100, 255: 100, 256: 100, 257: 100, 258: 100,
        259: 100, 260: 100, 261: 100, 262: 100, 263: 100, 264: 100,
        265: 100, 266: 100, 267: 100, 268: 100, 269: 100, 270: 100,
        271: 100, 272: 100, 273: 100, 274: 100, 275: 100, 276: 100,
        277: 100, 278: 100, 279: 100, 280: 100, 281: 100, 282: 100,
        283: 100, 284: 100, 285: 100, 286: 100, 287: 100, 288: 100,
        289: 100, 290: 100, 291: 100, 292: 100, 293: 100, 294: 100,
        295: 100, 296: 100, 297: 100, 298: 100, 299: 100, 300: 100,
    };

    function calculateItems1() {
        let currentLevel = parseInt(document.getElementById("currentLevel1").value);
        let desiredLevel = parseInt(document.getElementById("desiredLevel1").value);
        
        if (currentLevel >= desiredLevel) {
            document.getElementById("result1").textContent = 'The starting level must be less than the desired level.';
            return;
        }

        let totalItems = 0;
        for (let level = currentLevel; level < desiredLevel; level++) {
            totalItems += levelRequirements1[level] || 0;
        }

        document.getElementById("result1").textContent = `You need ${totalItems} approximately items to reach level ${desiredLevel} from level ${currentLevel}.`;
    }

    // Second calculator - Item Requirements (from the second code)
    const brocksRequired = {
        0: 1, 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 3, 8: 5, 9: 10,
    };

    for (let level = 10; level < 100; level++) brocksRequired[level] = 20;
    for (let level = 100; level < 200; level++) brocksRequired[level] = 33;
    for (let level = 200; level < 250; level++) brocksRequired[level] = 50;
    for (let level = 250; level <= 350; level++) brocksRequired[level] = 100;

    function calculateItems2() {
        let currentLevel = parseInt(document.getElementById("currentLevel2").value);
        let desiredLevel = parseInt(document.getElementById("desiredLevel2").value);
        
        if (currentLevel >= desiredLevel) {
            document.getElementById("result2").textContent = 'The starting level must be less than the desired level.';
            return;
        }

        let totalItems = 0;
        for (let level = currentLevel; level < desiredLevel; level++) {
            totalItems += brocksRequired[level] || 0;
        }

        document.getElementById("result2").textContent = `You need ${totalItems} approximately brocks to reach level ${desiredLevel} from level ${currentLevel}.`;
    }	

		
document.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector(".progress-text");

    progressBar.style.height = `${scrollPercentage}%`;

    // Calculate the color based on scroll percentage
    const red = Math.max(255 - (scrollPercentage * 2.55), 0); // Red decreases as you scroll
    const green = Math.min(scrollPercentage * 2.55, 255); // Green increases as you scroll

    progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    progressText.textContent = `${scrollPercentage}`;
});

// Create the progress text element dynamically
const progressText = document.createElement("div");
progressText.classList.add("progress-text");
progressText.textContent = "0";
document.body.appendChild(progressText);

    // Show the flashing text when the page loads
    window.addEventListener('load', () => {
      const flashText = document.getElementById('flash-text');
      flashText.style.display = 'block';

      // Hide the text after 1.5 seconds
      setTimeout(() => {
        flashText.style.display = 'none';
      }, 1500);
    });
    // Toggle FAQ answer visibility on click
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active class to show/hide the answer
            button.classList.toggle('active');
            const answer = button.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });