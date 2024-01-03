---
import { socialLinks } from '../data.js'; // Import your social links data

const SocialIcons = {
  links: socialLinks, // Pass the social links as a prop to the component
}

---
<div class="flex items-center justify-center">
  {this.links.map((link) => (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <div class="mx-1.5 transition-transform duration-300 ease-in-out hover:scale-110">
        <img src={link.icon} alt={link.name} width="25" height="25" />
      </div>
    </a>
  ))}
</div>
