# Logo & Variations

Showcase your primary logo, variations for different applications, and clear usage guidelines

## Logo variants

Our logo have a few variants in which it appear:

- **Default logo** – Where the *icon* & *typeface* are together horizontally  
    This is the default use of our logo
- **Vertical logo** – Where the *icon* & *typeface* are together vertically
- **Partial** – Where the *icon* or *typeface* are standalone
- **Extra small** - Small variants, used anywhere when the size is lower then `32px`  
    For example the *icon* is used as *favicon*

<FrameByFrame id="logo-variants">
    <PicsFrame 
        title-start="Default logo" 
        title-end="Vertical logo" 
        image-width-end="calc(var(--space-3xl) * 1.8)"
        image-end="/logo/Pepperi-Logo-Vertical.svg"/>
    <PicsFrame 
        title-start="Icon only logo" 
        title-end="Typeface only logo" 
        image-start="/logo/Pepperi-Icon.svg"
        image-end="/logo/Pepperi-Typeface.svg"
        image-width-start="calc(var(--space-2xl) * 1.8)"
        bg-start="var(--1-Bright)" 
        bg-end="var(--0-White)"/>
    <PicsFrame 
        title-start="Extra small logo" 
        title-End="Extra small logo, icon only" 
        image-width-start="calc(var(--space-3xl) * 1.8)"
        image-width-end="calc(var(--space-l) * 0.95)"
        image-start="/logo/Pepperi-Logo-XS.svg"
        image-end="/logo/Pepperi-Icon-XS.svg"/>
</FrameByFrame>

## Allowed colors, primary content

You can use the logo in `Primary-Brand` everywhere or in `White` in secondary content
					
In terms of background colors, you can use the logo in `Primary-Brand` in following manner everywhere

<FrameByFrame id="logo-variants">
    <PicsFrame 
        title-start="Logo used on White" 
        title-end="Logo used on Bright" 
        bg-end="var(--1-Bright)"/>
    <PicsFrame 
        title-start="Logo used on Lighter" 
        title-end="Logo used on Darkest" 
        bg-start="var(--2-Lighter)"
        bg-end="var(--7-Darkest)"
        :is-dark-end="true"/>
</FrameByFrame>

## Allowed colors, secondary content

You can use these color combinations as secondary content. 

For example, as an additional slide in a presentation or in a footer element. **Not** as main page in a website or as a cover slide in a presentation.

<FrameByFrame id="allowed-colors-secondary">
    <PicsFrame 
        title-start="White logo on Darkest" 
        title-end="White logo on Primary-Contrast" 
        image-start="/logo/Pepperi-Logo-Invert.svg"
        image-end="/logo/Pepperi-Logo-Invert.svg"
        bg-start="var(--7-Darkest)"
        bg-end="var(--Primary-Contrast)"
        :is-dark-start="true"
        :is-dark-end="true"/>
</FrameByFrame>

## Forbidden color

We can use the logo in many different ways, but there ways we can not, here are some of them 

<FrameByFrame id="forbidden-color">
    <PicsFrame 
        title-start="Logo on Secondary-Brand" 
        title-end="Logo on Tertiary-Brand" 
        bg-start="var(--Secondary-Brand)"
        bg-end="var(--Tertiary-Brand)"
        :is-dark-start="true"
        :good-to-use-start="false"
        :good-to-use-end="false"/>
    <PicsFrame 
        title-end="White logo on Secondary-Brand" 
        title-start="White logo on Tertiary-Brand" 
        image-end="/logo/Pepperi-Logo-Invert.svg"
        image-start="/logo/Pepperi-Logo-Invert.svg"
        bg-end="var(--Secondary-Brand)"
        bg-start="var(--Tertiary-Brand)"
        :is-dark-end="true"
        :good-to-use-start="false"
        :good-to-use-end="false"/>
    <PicsFrame 
        title-start="Any other color then approved" 
        title-end="Any other color then approved" 
        bg-start="var(--color-link-main)"
        bg-end="var(--4-Base)"
        :is-dark-start="true"
        :good-to-use-start="false"
        :good-to-use-end="false"/>
</FrameByFrame>

## Forbidden treatment and placement

We can use the logo in many different ways, but there ways we can not, here are some of them 

<FrameByFrame id="forbidden-color">
    <PicsFrame 
        title-start="Don't use any kind of shadow" 
        title-end="Don't use any kind of glow" 
        filter-start="drop-shadow(0.2em 0.2em 0.2em #00000050)"
        filter-end="drop-shadow(0 0 0.5em var(--Tertiary-Brand))"
        :good-to-use-start="false"
        :good-to-use-end="false"/>
    <PicsFrame 
        title-start="Don't place logo over an image" 
        title-end="Don't place logo over a gradient" 
        bg-start="url(/images/Depositphotos_146416039_XL.webp) center / cover"
        bg-end="linear-gradient(217deg, var(--Tertiary-Brand), rgba(255, 0, 0, 0) 70.71%),
                linear-gradient(127deg, var(--Secondary-Brand), rgba(0, 255, 0, 0) 70.71%),
                linear-gradient(336deg, var(--1-Bright), rgba(0, 0, 255, 0) 70.71%)"
        :good-to-use-start="false"
        :good-to-use-end="false"/>
</FrameByFrame>