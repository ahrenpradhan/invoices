/* eslint-disable max-classes-per-file */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor as _PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';

import ProductItem from './productItem';

const isInteractiveElement = (element) => {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
  ];

  if (interactiveElements.includes(element.tagName.toLowerCase())) {
    return true;
  }

  return false;
};

class PointerSensor extends _PointerSensor {
  static activators = [
    {
      eventName: 'onPointerDown',
      handler: ({ nativeEvent: event }) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}

const ProductList = () => {
  const invoiceProductListRedux = useSelector(
    (_) => _?.invoice?.create?.data?.products
  );
  const [items, setItems] = useState(['1', '2', '3']);
  const [selectedRow, setSelectedRow] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragStart = (event) => {
    const { active } = event;
    setSelectedRow(active.id);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    setSelectedRow(null);
    if (active.id !== over.id) {
      setItems((_) => {
        const oldIndex = _.indexOf(active.id);
        const newIndex = _.indexOf(over.id);
        return arrayMove(_, oldIndex, newIndex);
      });
    }
  };
  return Array.isArray(invoiceProductListRedux) &&
    invoiceProductListRedux.length ? (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <SortableContext
        items={invoiceProductListRedux}
        strategy={verticalListSortingStrategy}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            mamrgin: 0,
          }}
        >
          {invoiceProductListRedux.map((product, index) => (
            <ProductItem
              key={product.id}
              id={product.id}
              index={index}
              selectedRow={selectedRow}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  ) : (
    <>Loading</>
  );
};

export default ProductList;
