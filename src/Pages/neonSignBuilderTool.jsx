import React, { useState } from 'react';
import Header from '../components/Header/Header';
import TextInput from '../components/TextInput/TextInput';
import TextDisplay from '../components/TextDisplay/TextDisplay';
import FontSelector from '../components/FontSelector/FontSelector';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import TubeColorSelector from '../components/TubeColorMatcher/TubeColorMatcher';
import PresetSizeSelector from '../components/PresetSizeSelector/PresetSizeSelector';
import CustomSizeSelector from '../components/CustomSizeSelector/CustomSizeSelector';
import BackingTypeSelector from '../components/BackingTypeSelector/BackingTypeSelector';
import LocationSelector from '../components/LocationSelector/LocationSelector';
import Footer from '../components/Footer/Footer';
import '../neonSignToolStyles.css';

function NeonSignBuilderTool() {
const [textInput, setTextInput] = useState('');
const [selectedFont, setSelectedFont] = useState('Arial');
const [selectedColor, setSelectedColor] = useState('#2196f3'); // Default color

const [size, setSize] = useState({ width: 0, height: 0 });
const [location, setLocation] = useState('inside'); // or 'outside'
const [customSize, setCustomSize] = useState({ width: 0, height: 0 });

const handleTextInputChange = (text) => setTextInput(text);
  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New", /* more fonts */ ];

  const handleFontSelection = (font) => {
    setSelectedFont(font);
    console.log("Selected font: ", font);
  };
  
const colors = ["#FFD700","#ADD8E6", "#FF69B4", "#8F00FF", "#FFA500", "#FFC0CB", "#FF0000", "#FFFFFF", "#0D98BA", "#00008B", "#FAFA33", "#FFFDD0" /* more colors */];

const handleColorSelect = (color) => {
    setSelectedColor(color)
    console.log("Selected color: ", color);
};
const handleTubeColorSelect = (color) => {

  console.log("Selected tube color: ", color);
};
const handlePresetSizeSelect = (size) => {
  setSize(size);
  setCustomSize({ width: 0, height: 0 });
  console.log("Selected preset size: ", size);
};

const handleCustomSizeChange = (size) => {
  setSize(size);
  console.log("Selected custom size: ", size);
};
const handleBackingTypeSelect = (type) => {

  console.log("Selected backing type: ", type);
};
const handleLocationSelect = (location) => {
  setLocation(location);
  console.log("Selected location: ", location);
};

const handleResetCustomSize = () => {
  setCustomSize({ width: 0, height: 0 }); ///what this function is supposed to do is reset the sloder but it dosent
};

  return (
    <div className="neonSignBuilderTool">
      <Header></Header>
      <h1 style={{ 
          position: 'relative', 
          top: "60px",   
          left: '20px',
          color: 'white' 
          }}>
        Express Your-Self
        </h1>
      <TextDisplay font={selectedFont} text={textInput} glowColor={selectedColor} />
      <h1 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Text Input
        </h1>
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      <h1 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Font Selector
        </h1>
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      <h1 style={{  
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Color Selector
        </h1>
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      <h1 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Tube Color Matching
        </h1>
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} />
      <h1 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Size
        </h1>
        <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Custom Size
      </h2>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange}/>
      <h1 style={{ 
          position: 'relative', 
          top: "0px", 
          left: '20px',
          color: 'white' 
          }}>
        Backing Type
        </h1>
        <h3 style={{ 
          position: 'relative', 
          top: "0px", 
          left: '20px',
          color: 'white',
          fontSize: '15px' 
          }}>
          Choose which type of backing
          </h3>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect}/>
      <h1 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Location
        </h1>
        <h3 style={{ 
          position: 'relative', 
          top: "0px", 
          left: '20px',
          color: 'white',
          fontSize: '15px' 
          }}>
          Add 10% if location is 'outside'
          </h3>
      <LocationSelector onSelectLocation={handleLocationSelect}/>
      <Footer size={size} location={location} />
    </div>
  );
}

export default NeonSignBuilderTool;

