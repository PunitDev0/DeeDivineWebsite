import os

target_files = [
    "src/components/ddjay/DDJAYGuideContent.jsx",
]

replacements = {
    # Base
    "font-serif": "font-sans",
    "text-gray-800": "text-[#0c0d12]",
    
    # Overlines
    "text-red-600 uppercase tracking-widest text-sm font-semibold": "text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]",
    "text-red-600 font-semibold tracking-widest text-sm uppercase": "text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]",
    
    # Main headings
    "text-4xl md:text-5xl font-bold text-gray-900": "text-3xl md:text-5xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-3xl md:text-5xl font-bold text-gray-900": "text-3xl md:text-5xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-3xl md:text-4xl font-bold text-gray-900": "text-3xl md:text-4xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-2xl md:text-3xl font-bold text-gray-900": "text-2xl md:text-3xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-3xl font-bold text-gray-900": "text-3xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-2xl font-bold text-gray-900": "text-2xl font-black uppercase text-[#0c0d12] tracking-tight",
    "text-xl font-semibold text-gray-900": "text-xl font-bold text-[#0c0d12] tracking-tight",
    "text-lg font-semibold text-gray-900": "text-lg font-bold text-[#0c0d12] tracking-tight",
    
    # Body text
    "text-gray-700": "text-neutral-600 font-medium",
    "text-gray-600": "text-neutral-600 font-medium",
    "text-gray-500": "text-neutral-500",
    
    # Accents
    "text-red-500": "text-[#B51F3B]",
    "text-red-600": "text-[#B51F3B]",
    "bg-red-600": "bg-[#B51F3B]",
    "bg-red-500": "bg-[#B51F3B]",
    "bg-red-50": "bg-[#B51F3B]/10",
    "border-red-100": "border-[#B51F3B]/20",
    "border-red-200": "border-[#B51F3B]/30",
    "border-red-600": "border-[#B51F3B]",
    
    # Specific buttons/gradients
    "hover:bg-red-700": "hover:bg-[#8F1230]",
}

for file_path in target_files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {file_path}")

