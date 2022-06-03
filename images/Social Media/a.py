from PIL import Image
import glob, os

for i in glob.glob("*.jpg"):
    file, ext = os.path.splitext(i)
    print(file)
    im = Image.open(i).convert("RGB")
    im.save(file + ".webp", "WEBP")