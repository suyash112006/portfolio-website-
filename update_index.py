import re
import sys

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            c = f.read()
        
        # 1. Reorder sections
        s_m = re.search(r'(\s*<!-- ===== SKILLS SECTION ===== -->.*?)(?=\s*<!-- ===== PROJECTS SECTION ===== -->)', c, re.DOTALL)
        p_m = re.search(r'(\s*<!-- ===== PROJECTS SECTION ===== -->.*?)(?=\s*<!-- ===== SERVICES SECTION ===== -->)', c, re.DOTALL)
        
        if s_m and p_m:
            s = s_m.group(1)
            p = p_m.group(1)
            c = c[:s_m.start(1)] + p + s + c[p_m.end(1):]
            print('Reordered sections')
        else:
            print('Sections not found')
            
        # 2. Reorder nav links
        c = c.replace(
            '<a href="#skills" class="nav-link" data-section="skills">Skills</a>\n                <a href="#projects" class="nav-link" data-section="projects">Projects</a>',
            '<a href="#projects" class="nav-link" data-section="projects">Projects</a>\n                <a href="#skills" class="nav-link" data-section="skills">Skills</a>'
        )
        print('Reordered nav links')
        
        # 3. Skip skill bars here, do it via IDE tool
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(c)
        print('Saved index.html')
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
