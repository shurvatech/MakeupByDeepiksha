import re
import difflib

t_index = re.search(r'<section class="terms-section"[^>]*>.*?</section>', open('index.html', encoding='utf-8').read(), re.DOTALL).group(0)
t_services = re.search(r'<section class="terms-section"[^>]*>.*?</section>', open('services.html', encoding='utf-8').read(), re.DOTALL).group(0)
print('Exact match:', t_index == t_services)
if t_index != t_services:
    print(''.join(difflib.unified_diff(t_index.splitlines(keepends=True), t_services.splitlines(keepends=True))))
