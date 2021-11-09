import xml.etree.ElementTree as ET
tree = ET.parse('frontend/public.xml')
root = tree.getroot()
level = ET.SubElement(root, 'level', {'id': 'blahblah2'})
level.text = "<colors>FF/colors><layout>55</layout>"
tree.write('frontend/public.xml')