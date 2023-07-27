import cv2
import matplotlib.pyplot as plt
from matplotlib import ft2font

config_file=r'C:\\Users\\user\\Desktop\\New folder\\code\\python_jizz\\ObjectDetection\\ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt'
frozen_model=r'C:\\Users\\user\\Desktop\\New folder\\code\\python_jizz\\ObjectDetection\\frozen_inference_graph.pb'

model = cv2.dnn_DetectionModel(frozen_model,config_file)

classLabels=[]
filename=r'C:\\Users\\user\\Desktop\\New folder\\code\\python_jizz\\ObjectDetection\\yolo3.txt'
with open(filename,'rt') as fpt:
  classLabels = fpt.read().rstrip('\n').split('\n')
model.setInputSize(320,320)
model.setInputScale(1.0/127.5)
model.setInputMean((127.5,127.5,127.5))
model.setInputSwapRB(True)

img = cv2.imread(r'C:\\Users\\user\\Desktop\\New folder\\code\\python_jizz\\ObjectDetection\\image.jpg')
plt.imshow(img)

plt.imshow(cv2.cvtColor(img,cv2.COLOR_BGR2RGB))

ClassIndex, confidence, bbox = model.detect(img, confThreshold=0.3)

font_scale = 1 
font = cv2.FONT_HERSHEY_PLAIN
for ClassInd, conf, boxes in zip(ClassIndex.flatten(), confidence.flatten(), bbox):
    cv2.rectangle(img, boxes, (0, 255, 0), 1)
    cv2.putText(img, classLabels[ClassInd-1], (boxes[0]+10, boxes[1]+40), font, fontScale=font_scale, color=(0, 0, 255), thickness=2)
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.plot(range(1))
plt.show()